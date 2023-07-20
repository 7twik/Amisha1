import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './Faq';
import Carde from './Card';
import Nave from './Nav';

function Land() {


  return (
    <>
      <div className='nave'>
        <Nave />
      </div>
      
      <div className="App">
        <div className='in1'>
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops_Kiosk_July/PopularSeries_tile_440_dell.jpg" name="Dell" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy_8.jpg" name="Honor" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries.jpg" name="Hp" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy_9.jpg" name="Samsung" />
        </div>
        <div className='in2'>
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy.jpg" name="Lenovo" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/D54261251_IN_PC_Laptops_PageRevamp_BAU_tile_440_POPULAR1.jpg" name="Asus" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy_11.jpg" name="Msi" />
          <Carde url="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy_4.jpg" name="Acer" />
        </div>
      </div>
      <div className='faq'>
        <Faq />
      </div>
    </>
  )
}

export default Land
