import style from './edit.module.css'; // Importing CSS module

function EditAccountsPage() {
  return (
    <form className={style.edit} method='post'>
      <div className={style.area}>
        <label 
        htmlFor="linkedin" className={style.label}>LinkedIn : </label>
        <input 
        defaultValue={localStorage.getItem(`linkedlin`)}
        type="text" name='linkedin' id='linkedin' placeholder='username(eg. user_12)' />
      </div>
      <div className={style.area}>
        <label htmlFor="github" className={style.label}>GitHub : </label>
        <input type="text" name='github' id='github' placeholder='username(eg. user_12)' />
      </div>
      <div className={style.area}>
        <label htmlFor="discord" className={style.label}>Discord : </label>
        <input type="text" name='discord' id='discord' placeholder='username(eg. user_12)' />
      </div>
      <input type="submit" value='Save' className={style.save} />
    </form>
  );
}

export default EditAccountsPage;
