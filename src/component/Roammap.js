/** @format */

//  const Roammap = () => {
//     return (
//         <div>

//         </div>
//     )
// }
// export default Roammap;

//REDUCERS
const initValue = { value: 0 };

const RootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
        // khong thay doi truc tiep gia tri state
        //vd state.value = state.value +1
        // return state
        // không sử dụng các function tính toán ngẫu nhiên
        //eg Math.random(),Date now()
        // cac request toi serve
        // boi vi moi lan no thuc thi  no se tra ve gia tri gi khac ta khong the nao du doan duoc cac gia tri no se tra ve
        // Vi muc dich redux se du doan duoc gia tri no thay doi
      };
    // action INCREMENT
    case "todoList/increment":
      return {
        ...state,
        value: state.value + action.playload,
      };
    default:
      return state;
  }
};

// ACTIVE
// la 1 object ma chung ta xay dung
const INCREMENT = {
  type: "todoList/increment",
  playload: 10,
};
// action creators : function tao ra action (tranh lap lai code)

const increamentCreateor = (data) => {
  return {
    type: "todoList/increment",
    playload: data,
  };
};
increamentCreateor(10);
// DISPATCH
// la 1 function  sd dispatch de cap nhap cac state trong store
// UI ban du lieu vao store , xong reducer trong store se nhan duoc giu lieu nay : state
dispatch(INCREMENT);
// or 
dispatch(increamentCreateor(15));