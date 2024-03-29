// import React from 'react';
// import { Link } from 'react-router-dom';
// import SignOutButton from '../SignOut';
// import * as ROUTES from '../constants/routes';
//
// const Navigation = ({ authUser }) => (
//     <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
// );
// const NavigationAuth = () => (
//     <ul>
//         <li>
//             <Link to={ROUTES.LANDING}>Landing</Link>
//         </li>
//         <li>
//             <Link to={ROUTES.HOME}>Home</Link>
//         </li>
//         <li>
//             <Link to={ROUTES.ACCOUNT}>Account</Link>
//         </li>
//         <li>
//             <SignOutButton />
//         </li>
//     </ul>
// );
// const NavigationNonAuth = () => (
//     <ul>
//         <li>
//             <Link to={ROUTES.LANDING}>Landing</Link>
//         </li>
//         <li>
//             <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//         </li>
//     </ul>
// );
// export default Navigation;

import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

const Navigation = ({authUser}) => (
    <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
);


const NavigationAuth = () => (
    <div>
        <ul>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
    </ul>
);
export default Navigation;
