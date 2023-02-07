import * as React from "react";
/**
 * Component for About section 
 * @param props 
 * @returns HTML element
 */
var array: any = ['Promotions', 'Pizza', 'Starters', 'Beverages', 'Desserts']

type services = {
    c_menuitems: any;
};

export default function Storefacility(props: services) {
    const { c_menuitems } = props;
    return (
        <>
        {c_menuitems?
         <div className="store-faci">
      <h2 >MENU</h2>   
        <div className="boxes-row">

            {c_menuitems?.map((i: any, index: any) => {
                       

                return (
                    <>
                                <div className="boxes-fac">
                                    <div className="img-item">
                                        {i.facilitiesIcon.map((n:any)=>{
                                            return(
                                             <img className="bg-[#FFFFFF]"  src={n.url}></img>
                                            )
                                        })}
                                       </div>
                                    <h5>{i.facilitiesName ? i.facilitiesName : array[index]}</h5>
                                </div>

                 </>
                )


            })

            }
            </div>
            </div>
            :""}
        </>
    )


}