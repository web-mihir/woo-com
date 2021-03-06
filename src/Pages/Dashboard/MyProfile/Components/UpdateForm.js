import React from 'react';
import BtnSpinner from '../../../../Components/Shared/BtnSpinner/BtnSpinner';

const UpdateForm = ({ type, defaultValue, actionLoading, getValue, updateDocHandler, openEdit }) => {

   return (
      <form className={`update_form ${openEdit === defaultValue ? "active" : ""}`} onSubmit={updateDocHandler}>
         <input type={type} className='form-control form-control-sm' defaultValue={defaultValue} onChange={(e) => getValue(e.target.value)} />
         <button type='submit'>{actionLoading ? <><BtnSpinner text={"Updating..."}></BtnSpinner></> : "Update"}</button>
      </form>
   );
};

export default UpdateForm;