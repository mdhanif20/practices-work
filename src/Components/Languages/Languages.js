import Language from '../Language/Language';
import './Languages.css';
import LoadData from './../Hooks/LoadData';
const Languages = () => {
    // takes data from hook LoadData 
    const [languages] = LoadData();
    return (
        <div>
            <div className="pt-5 mt-5">
                 <h2>Our Course</h2>
            </div>
            <div id="language">
            {
                languages.map(language=> <div key={language.rank}>
                    {/* course showing cart area  */}
                    <Language  language={language}></Language>
                </div>
                )
            }
            </div>
        </div>
        
    );
};

export default Languages;