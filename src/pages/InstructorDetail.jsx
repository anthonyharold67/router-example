import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import NotFound from "./NotFound"

const InstructorDetail = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();

  const navigate = useNavigate();

  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  // const location = useLocation();
  // const inst = location.state;

  const [inst, setInst] = useState(null);
  const [errors,setErrors]=useState(false)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(!res.ok){
          setErrors(true)
          throw new Error("Something went wrong")//&error oluşturduk kendimiz çünkü kullanıcı url e olmayan bir id girerse veri gelmeyecek syafamızda fetchsiz olan veriler gözükceği için biz hata döndürsün istiyoruz
        }
        return res.json()
      })
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(inst);

  if(errors){
      return <NotFound/>
    }else if(!inst){
      return (
        <div className="text-center">
        <h2>Data is Fetching</h2>
      </div>
      )
    }
    else{
      return (<div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button onClick={() => navigate('/')} className="btn btn-success me-2">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>)
  }
};

export default InstructorDetail;
