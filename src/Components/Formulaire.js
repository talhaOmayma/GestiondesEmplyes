import React from 'react'
import { useState } from 'react';
// import EmployeeImage from "./EmployeeImage.png"
export default function Formulaire() {
    const [emplyes, setEmloyes]= useState([]);
    const [EmplyeActuel, setEmplyeActuel] = useState({
        id:'',
      nom:'',
      email:'',
      telephone:'',
      fonction:'',
      sexe:'',
      experience:0
    })

    const handleChangeEmplye = (event) => {
        setEmplyeActuel({...EmplyeActuel,[event.target.name]: event.target.value})
    }

    const handleAjouterEmploye =(event) =>{
        event.preventDefault();
        let newEmp=({...EmplyeActuel, id:emplyes.length + 1 })
        setEmloyes([...emplyes, newEmp])
        setEmplyeActuel({
            id:'',
            nom:'',
            email:'',
            telephone:'',
            fonction:'',
            sexe:'',
            experience:0
          })

    }
    const SupprimerEmploye =(id)=>{
        setEmloyes(emplyes.filter((item)=> item.id !== id))
    }


  return (
    <div className='container'>
    <div className="row">
        <div className="col-md-6">
            
            <h2 className='text text-success'>Nouveau Emplyé</h2>
            <form onSubmit={handleAjouterEmploye}>
                <div className="form-group">
                  <label htmlFor='nom'>Nom</label>
                  <input type="text" className='form-control' name='nom' id='nom' value={EmplyeActuel.nom} onChange={handleChangeEmplye} />
                </div> 
                <div className="form-group mt-2" >
                  <label htmlFor='email'>Email</label>
                  <input type="email" className='form-control' name='email' id='email' value={EmplyeActuel.email} onChange={handleChangeEmplye}/>
                </div> 
                <div className="form-group mt-2">
                  <label htmlFor='telephone'>Téléphone</label>
                  <input type="text" className='form-control' name='telephone' id='telephone' value={EmplyeActuel.telephone} onChange={handleChangeEmplye}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor='fonction'>Fonction</label>
                    <select name="fonction" id="function" className='form-control' value={EmplyeActuel.fonction} onChange={handleChangeEmplye}>
                      <option value="" selected>Selectionner votre metier</option>
                      <option value="Développeur logiciel">Développeur logiciel</option>
                      <option value="Développeur web">Développeur web</option>
                      <option value="Administrateur système">Administrateur système</option>
                      <option value="Développeur mobile">Développeur mobile</option>
                      <option value="Ingénieur DevOps">Ingénieur DevOps</option>
                      <option value="Développeur Full-Stack">Développeur Full-Stack</option>
                      <option value="Administrateur de bases de données">Administrateur de bases de données</option>
                      <option value="Testeur/Qualiticien logiciel">Testeur/Qualiticien logiciel</option>
                    </select>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="sexe">Sexe</label> <br/>
                    <input type="radio" name='sexe' id='homme' value="Homme" onChange={handleChangeEmplye}/>Homme
                    <input type="radio" name='sexe' id='femme' value="Femme" onChange={handleChangeEmplye}/>Femme
                </div>
                <div className="form-group mt-2">
                  <label htmlFor='experience'>Années d'expérience</label>
                  <input type="number" max={15} className='form-control' name='experience' id='experience' value={EmplyeActuel.experience} onChange={handleChangeEmplye}/>
                </div> 
                <div className='mt-2'>
                    <button className='btn btn-success' type='submit' >Ajouter Employé</button>
                </div>
            </form>
        </div>
        <div className="col-md-6">
        {/* <img src={EmployeeImage} alt="employe" style={{ width: '500px', height: 'auto' }} /> */}
        </div>
        
    </div>
    <div className="mt-4">
        <h2 className='text text-success'> Liste des employés</h2>
        <div className='col-md-12'>
            <table className='table'>
                <thead>
                   <tr> 
                   <th>ID</th>
                   <th>Nom</th>
                   <th>Email</th>
                   <th>Téléphone</th>
                   <th>Fonction</th>
                   <th>Sexe</th>
                   <th>Années d'expérience</th>
                   <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                    { 
                    emplyes && emplyes.map((item) => {
                        return (
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.telephone}</td>
                    <td>{item.fonction}</td>
                    <td>{item.sexe}</td>
                    <td>{item.experience}</td>
                    <td>
                       <button type="button" className="btn btn-danger" onClick={()=> SupprimerEmploye(item.id)} >Supprimer </button>
                    </td>
                    </tr>
                   ) })}
                </tbody>
            </table>

        </div>
    </div>
    </div>
  )
}
