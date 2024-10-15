export function Reload(page){
    let value = localStorage.getItem(page);
    if(!value){
        location.reload();
        localStorage.setItem(page , 'true');
    }
}