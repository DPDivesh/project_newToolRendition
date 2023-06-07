import {React} from "react";

const InfoForm = (props)=>{

  const infoGetter =()=>{
    
    return(
      <label htmlFor="min-reload">Please Enter Minimum Reload Amount:
              {}
              <input name="min-Reload" pattern="^(0|[1-9][0-9]*)$" onChange={props.reload}/>
              <input type="submit" value="Submit"/>
              </label>
    )
  }

  return(
    <label htmlFor="min-reload">Please Enter Minimum Reload Amount:
              {}
              <input name="min-Reload" pattern="^(0|[1-9][0-9]*)$" onChange={props.reload}/>
              <input type="submit" value="Submit"/>
              </label>
  );
}

export default InfoForm;