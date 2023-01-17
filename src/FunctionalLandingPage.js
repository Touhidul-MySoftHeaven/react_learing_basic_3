import ShowHide from './functionalCodes/ShowHide';
import BasicFrom from './functionalCodes/BasicFrom';
import ConditionalRend from './functionalCodes/ConditionalRend';
import FormValidation from './functionalCodes/FormValidationBasic';
import Users from './functionalCodes/Users';

export default function LandingFunctionHub()
{
         function getData()
         {
            alert("this gata Worked");
         }

    return (
        <div>
        <ShowHide />
        <BasicFrom />
        <ConditionalRend />
        <FormValidation />
        <Users data={getData}/>
        </div>
    )
}