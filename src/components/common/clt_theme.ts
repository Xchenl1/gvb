import {ref} from "vue";

export const theme = ref('')

export function setTheme(val:string){
    if (val === "dark"){
        document.body.setAttribute('arco-theme', 'dark')
    }else {
        document.body.removeAttribute('arco-theme')
    }
    theme.value= val
    localStorage.setItem("theme",theme.value)
}

export function loadTheme(){
    const val=localStorage.getItem("theme")
    if (val){
        if (val==="dark"){
            theme.value=val
        }
    }
}