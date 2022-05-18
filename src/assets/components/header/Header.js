import ArrowBack from "./ArrowBack";
import PageTitle from "./PageTitle";
import Search from "./Search";

const Header = () => {
    return ( 
        <header className="flex items-center mt-[27px] mx-[25px] justify-between">
            <ArrowBack/>
            <PageTitle/>
            <Search/>
        </header>
     );
}
 
export default Header;