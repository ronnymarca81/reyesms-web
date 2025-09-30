import type{ ContentImageProps } from './types' 
const ContentImage: React.FC<ContentImageProps> = (
    { title, 
      paragraphs, 
      buttons, 
      image, 
      reverse = false, 
      backgroundColor = "bg-gray-50" 
    }) => 
    { 
        return ( 
        <section className={`w-full py-16 ${backgroundColor}`}> 
            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${ reverse ? "md:flex flex-row-reverse" : "" }`} > 
                {/* Content Section */} 
                <div className="space-y-6 px-6"> 
                    <h1 className="text-4xl font-bold text-gray-900">{title}</h1> 
                    <div className="space-y-4"> 
                        {paragraphs.map((text, index) => 
                        ( 
                        <p key={index} className="text-lg text-gray-600"> {text} </p> 
                        ))} 
                   </div> 
                   <div className="flex flex-wrap gap-4"> 
                        {buttons.map((btn, index) => 
                        ( 
                        <button 
                           key={index} 
                           onClick={btn.onClick} 
                           className={`px-5 py-3 rounded-lg font-medium transition 
                                      ${ btn.variant === "secondary" 
                                        ? "border border-indigo-600 text-indigo-600 hover:bg-indigo-50" 
                                        : "bg-indigo-600 text-white hover:bg-indigo-700" }`} 
                        > 
                          {btn.label} 
                        </button> 
                        ))} 
                    </div> 
                </div> 
                {/* Image Section as Background */} 
                <div className="w-full h-[400px] md:h-[500px] rounded-xl shadow-lg bg-cover bg-center" 
                style={{ backgroundImage: `url(${image})` }} >
                </div> 
            </div> 
        </section> ); 
    }; 
export default ContentImage;