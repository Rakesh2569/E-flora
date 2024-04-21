import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import './Verify.css'

const Verify = () => {
  const { url } = useContext(StoreContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", { success, orderId });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        throw new Error("Payment verification failed");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      // Handle error: Display error message and navigate accordingly
      navigate("/error");
      
    } finally {
      setLoading(false); // Update loading state regardless of success or failure
    }
  }

  useEffect(() => {
    verifyPayment();
  }, [success, orderId]); // Include dependencies if needed

  return (
    <div className='verify'>
      {loading && <div className="spinner"></div>}
      {!loading && <p>Verifying payment...</p>}
    </div>
  )
}

export default Verify
