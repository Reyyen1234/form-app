import {useState,useEffect} from 'react'

function Form(addContacts,contacts) {
    const [form,setForm]=useState({fullname:"",phone_number:""})
    useEffect(()=>{
        setForm({fullname:"",phone_number:""})
    },[contacts])
    // onchangeInput: inputun isi degistigi anda state atamasini yapabilmesi icin gerekli olan fonksiyon olacak
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        //... noktanin anlami bir once deger getir
    };
    //buttona bastigimiz anda
    const onSubmit=(e)=>{
      //sayfa yenilenmesi engellemek icin
        e.preventDefault();

      //fullname ve phonenumberi birini bos biraktiginda ekleme yapmayack
        if(form.fullname ==="" || form.phone_number ===""){
            return false;
        }

        addContacts([...contacts,form])
        
    }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname' 
               placeholder='full Name'
               value={form.fullname}
               onChange={onChangeInput}></input>
      </div>
      <div><input name='phone_number'
                  placeholder='phone Number' 
                  value={form.phone_number}
                  onChange={onChangeInput}></input></div>
      <div><button>Add</button></div>
    </form>
    
  )
}

export default Form

