import './brands.css';
function Brands(){
 
  
    return(
        <>
        <div className="brands mb-5">
            <h2 className='m-4'>Brands</h2>
            <div className='container'>

            <div className='row'>
            <div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
            </div><div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
            </div>
            <div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
                
            </div>
            <div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
                
            </div>
            </div>
            <div className='row'>
            <div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
            </div><div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
            </div><div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
            </div>
        
                
            </div>
            <div className="brand col-3 ">
                <img src={require('../assets/imgs/brand-creation-concept-illustration_114360-11748.avif')} alt='img' />
                
            </div>
                
        </div>
        </div>

        
        </>
    );
}
export default Brands;