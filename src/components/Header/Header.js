import logoWhite from 'assets/calm-logo-white.png';
import HeaderButton from './HeaderButton';

export default function Header(){
    return (
        <div className="header">
            <img src={logoWhite} alt="Calm logo" />
            {/* TODO below can be DRYer */}
            <HeaderButton text="For Business"/>
            <HeaderButton text="Log in"/>
            <HeaderButton text="Try Calm for Free"/>

        </div>
    );
}
