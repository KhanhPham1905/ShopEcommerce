import { loginFailure, loginStart , loginSuccess} from "./userRedux.js";
import { publicRequest, userRequest } from "../requestMethods.js";
import { addCartFailure, addCartStart, addCartSuccess, addProduct } from "./cartRedux.js";

export const login = async( dispatch, user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}



export const addCart = async (cart, dispatch) => {
    // console.log(cart)
    dispatch(addCartStart());
    try {
      // dispatch(addProduct(cart))
       console.log('THANH CONG')
       const res = await userRequest.post(`/carts`, cart);
      // const res = await userRequest.post(`/carts`, cart);
      console.log('THANH CONG 2')
      dispatch(addCartSuccess(res.data));
      
    } catch (err) {
      dispatch(addCartFailure());
    }
  };
  