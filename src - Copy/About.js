import Header from "./Header";
import Footer from "./Footer";


export default function About(){
    return(
        <>
        <Header />
        <h2 className="about aboutH2">
           Become an Award Winning Comedian in No Time
        </h2>
        <h3 className="about aboutH3">
            Comedy Without Tears! 
        </h3>
        <p className="about aboutPar">
            Make an awesome comedy routine in minutes. Simply click the get joke button.
             If you like a button add it to your comedy routine. You can mark your favourite jokes by clicking the star. 
             Want to make a joke funnier? No problem! You can edit any joke by selecting the edit button. 
             If you're tired of a joke, simply delete it from the list. 

        </p>
        <br />
        <p className="about aboutPar">Bedazzle your friends, family and comedy audiences with these brilliant jokes. Sign up for comedy 
        shows and watch the comedy awards roll in. Meeting your inlaws for the first time can be awkward. NOT when you use Comedy Pro! Also suitable for wedding speeches and impressing 
            on your first date. Are you a wallflower? Not any more. With these jokes you're guaranteed to be the life and soul of any party. 
            Happy Joke Making! 
        </p>
        <Footer />
        </>
    )
}