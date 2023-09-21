import { reactive, toRefs } from "vue";
import axios from 'axios';
const API ='http://192.168.1.34:1337/api'
const data = reactive({
    isloading: false,
    cat_name_list:[],
    categories : {},
    detail_post : {},
    category_name:"",
})



async function search(title){
  try {
      const response = await axios.get(`${API}/post?title=${title}`);
      fechgetegory()
  } catch (error) {
    console.error('Error fetching items:', error);
  }}



// postspostspostspostspostspostspostspostspostspostspostspostspostspostspostsposts
async function fechgetegory ( ){
    try{
        // Test 
        // var r = await loopaa();
        // console.log("rrrrrr",r);

        // 
        data.isloading = true
        const response = await axios.get(`${API}/posts?populate=*`);
        data.categories=response.data.data;
        data.isloading=false
    }
    catch(error){
        console.error('Error fecthing items:',error);
    }
}
// postspostspostspostspostspostspostspostspostspostspostspostspostspostspostspostspostspostspostsposts
// async function g (id){
//   try{
  
//       data.isloading = true
//       const response = await axios.get(`${API}/posts?populate=*&filters[category][id]=21`);
//       data.categories=response.data.data;
//       data.isloading=false
//   }
//   catch(error){
//       console.error('Error fecthing items:',error);
//   }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function cat_name ( id ){
//   try{
//       // Test 
//       // var r = await loopaa();
//       // console.log("rrrrrr",r);

//       // 
//       data.isloading = true
//       const response = await axios.get(`${API}/posts?populate=*&filters[category][id]=${id}`);
//       data.cat_name=response.data.data;
//       data.isloading=false
//   }
//   catch(error){
//       console.error('Error fecthing items:',error);
//   }
// }

async function fechingByCategory ( id ){
  try{
  
      data.isloading = true
      const response = await axios.get(`${API}/posts?populate=*&filters[category][id]=${id}`);
      data.cat_name_list=response.data.data;
      data.isloading=false
  }
  catch(error){
      console.error('Error fecthing items:',error);
  }
}
// ///////////////////////////////////////////////////////////////////
async function fetchingById (id){
  try{
    console.log(id);
      data.isloading = true
    
        const response = await axios.get(`${API}/posts/${id}?populate=*`);
        console.log(response);
        data.detail_post=response.data.data;
       
        data.isloading=false
   
        if(data.detail_post.category!==null){
         fechingByCategory(data.detail_post.category.id)
        }
   
  }
  catch(error){
      console.error('Error fecthing items:',error);
  }
}


// function loopaa(){
//     return new Promise((resolveOuter, reject) => {
//       try {
//         var num=5000;
//       for (let index = 0; index <2000; index++) {
        
//         num= num+2;
//       } 
//       resolveOuter(num)
//       } catch (error) {
//         reject(error)
//       }
     
//     });
    
//   }
//   function loopbb(a){
//     console.log(a+400);
    
//   }


async function createCategory(){
    try {
        if(data.category_name !==null){
            data.isLoading=true
            const response = await axios.post(`${API}/posts`,{
                "data": {
                  "cate_name":data.category_name
                }
              });
              if(response.status===200){
                     data.category_name=""
            fetchCategory()
              }
         
        }

    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  async function deleteCategory(id){
    try {
        const response = await axios.delete(`${API}/posts/${id}`);
        fetchCategory()
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
  async function EditCategory(item){
    data.category_name=item.cate_name
    data.category_id =item.id
  }
  async function saveEdit(){
    try {
        const response = await axios.put(`${API}/posts/${data.category_id}`,{
            "data": {
              "cate_name":data.category_name
            }
          });
          if(response.status===200){
            data.category_name=""
            fetchCategory()
     }
       
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

/////////////////////////////////////////


/////////////////////////////////////////
export default{
    ...toRefs(data),
    fechgetegory,
    deleteCategory,
    createCategory,
    EditCategory,
    saveEdit,
    fetchingById,
    search
}