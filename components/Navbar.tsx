import Link from 'next/link';

export default function (): JSX.Element {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
               <li>
                   <Link href="/">
                       <button className="btn-logo">FEED</button>
                   </Link>
                </li>

                {/* user is signed in and has a username */}
                {username && (
                    <>
                        <li>
                            <Link href="/admin">
                                <button className="btn-logo">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href="{`/${usernmae}`}">
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed in or hasn't created a username */}
                {!username && (
                    <li>
                        <Link href="/login">
                            <button className="btn-logo">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}