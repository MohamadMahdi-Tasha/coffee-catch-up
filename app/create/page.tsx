// Codes by mahdi tasha
// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import IconComponent from "@/chunk/iconComponent";
import {DatabaseReference, DataSnapshot, onValue, set} from "@firebase/database";
import useFirebase from "@/hook/useFirebase";
import {Auth, getAuth, onAuthStateChanged} from "@firebase/auth";
import Link from "next/link";
import Editor from '@monaco-editor/react';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

// Creating and exporting create blog page as default
export default function Page():ReactNode {
    // Defining states of component
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [isUserAdmin, setUserAdmin]:[boolean, Dispatch<boolean>] = useState(false);
    const [dataOfEditor, setDataOfEditor]:[string, Dispatch<string>] = useState('');
    const [isEditorEmpty, setEditorEmpty]:[boolean, Dispatch<boolean>] = useState(false);
    const [isFormFetching, setFormFetching]:[boolean, Dispatch<boolean>] = useState(false);
    const [isTitleFound, setTitleFound]:[boolean, Dispatch<boolean>] = useState(false);
    const [blogs, setBlogs]:[{
        title: string,
        img: string,
        content: string,
        date: string,
        profileImg: string | null | undefined,
        profileName: string,
        views: number
    }[], Dispatch<any>] = useState([{
        title: '',
        img: '',
        content: '',
        date: '',
        profileImg: '',
        profileName: '',
        views: 0
    }]);

    // Defining reference to inputs
    const titleInputRef:MutableRefObject<any> = useRef();
    const imgInputRef:MutableRefObject<any> = useRef();

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/blogs');
    const auth:Auth = getAuth();

    // Defining useRouter hook to navigate to pages
    const router:AppRouterInstance = useRouter();

    // Using useEffect hook to check if is user logged in and he is admin
    useEffect(() => {
        onValue(databaseRef, (snapshot:DataSnapshot) => {setBlogs(snapshot.val())})

        onAuthStateChanged(auth, (user) => {
            setFetching(false);

            if (user) {
                setUserLoggedIn(true);

                (user.email === "imwhdiiii@gmail.com")
                    ? setUserAdmin(true)
                    : setUserAdmin(false);
            } else {
                setUserLoggedIn(false);
                setUserAdmin(false);
            }
        })
    }, [])

    // Returning JSX
    return (
        <HolderComponent>
            {
                (isFetching)
                    ? <div className={'flex justify-center items-center'}><IconComponent size={50} name={'loading'} /></div>
                    : (!isUserLoggedIn)
                        ? (
                            <div className={'flex justify-center items-center flex-col'}>
                                <h1 className={'text-[40px] font-black text-center mb-[20px]'}>First Log In.</h1>
                                <Link className={'primary-btn'} href={'/login'}>Login</Link>
                            </div>
                        ) : (!isUserAdmin)
                            ? <h1 className={'text-[40px] font-black text-center mb-[20px]'}>You must be admin to add blogs, sorry.</h1>
                            : (
                                <form action={'#'} onSubmit={(event) => {
                                    event.preventDefault();

                                    if (!isFormFetching) {
                                        if (dataOfEditor === '') {
                                            setEditorEmpty(true);
                                        } else {
                                            const findedItemInBlogs = blogs.find(item => item.title === titleInputRef.current.value);

                                            if (findedItemInBlogs) {
                                                setTitleFound(true);
                                            } else {
                                                setFormFetching(true);
                                                setTitleFound(false);
                                                setEditorEmpty(false);

                                                blogs.push({
                                                    content: dataOfEditor,
                                                    date: new Date().toLocaleDateString(),
                                                    img: imgInputRef.current.value,
                                                    profileImg: auth.currentUser?.photoURL,
                                                    profileName: 'Mahdi Tasha',
                                                    title: titleInputRef.current.value,
                                                    views: 0
                                                })

                                                set(databaseRef, blogs).then(() => {
                                                    setFormFetching(false);
                                                    router.push('/')
                                                })
                                            }
                                        }
                                    }
                                }}>
                                    <h1 className={'title-no-blog mb-[50px]'}>Create blog:</h1>
                                    <div>
                                        <div className={'mb-[30px]'}>
                                            <label className={'input-label'} htmlFor="title-input">Title of the blog:</label>
                                            <input ref={titleInputRef} className={'input'} minLength={20} maxLength={150} type="text" placeholder={'Examaples like: Todays Todo List :))'} required id={'title-input'} name={'title-input'} />
                                        </div>
                                        {
                                            (isTitleFound)
                                                ? (
                                                    <div className={'mb-[50px] bg-red-200 p-[20px]'}>
                                                        <p className={'text-[17px] font-bold text-red-600'}>Please try another title.</p>
                                                    </div>
                                                ) : false
                                        }
                                        <div className={'mb-[50px]'}>
                                            <label className={'input-label'} htmlFor="img-input">Image of the blog:</label>
                                            <input ref={imgInputRef} pattern={'(https?:\\/\\/.*\\.(?:png|jpg))'} className={'input'} type="text" placeholder={'https://www. and ......'} required id={'img-input'} name={'img-input'} />
                                        </div>
                                        <h1 className={'title-no-blog mb-[30px]'}>Content:</h1>
                                        <Editor
                                            onChange={(value) => (value) ? setDataOfEditor(value) : setDataOfEditor('')}
                                            theme={'vs-dark'} height="500px" defaultLanguage="markdown" defaultValue={dataOfEditor} className={'w-full'}
                                        />
                                        {
                                            (isEditorEmpty)
                                                ? (
                                                    <div className={'mt-[30px] bg-red-200 p-[20px]'}>
                                                        <p className={'text-[17px] font-bold text-red-600'}>Please fill the editor above .</p>
                                                    </div>
                                                ) : false
                                        }
                                        <h1 className={'title-no-blog mt-[100px] mb-[30px]'}>Result:</h1>
                                        <Markdown remarkPlugins={[remarkGfm]} className={'w-full h-[500px] overflow-auto markdown mb-[50px] p-[20px] border border-black'}>{dataOfEditor}</Markdown>
                                        <button tabIndex={(isFetching) ? -1 : 0} data-fetching={isFormFetching} className={'primary-btn w-full flex justify-center items-center data-[fetching="true"]:opacity-50 data-[fetching="true"]:pointer-events-none'}>
                                            {
                                                (isFormFetching)
                                                    ? <IconComponent name={'loading'} size={30} />
                                                    : 'SUBMIT'
                                            }
                                        </button>
                                    </div>
                                </form>
                            )
            }
        </HolderComponent>
    );
}