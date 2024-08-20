
import axios from 'axios';
// import BaseUrl from '../Api/BaseUrl';
import { createSlice } from "@reduxjs/toolkit";
// import { setsnackBar } from "../../../Reducers/SnackBarReducer"
// const Confdata = window['runConfig'];

// let BaseUrl = 'http://64.227.142.191:8080/';

export const BookListReducer = createSlice({
    name: 'userTemplate',
    initialState: {
        Booklist: [],
        Ascbooklist: [],
        Descbooklist: [],
        Booksearchquery: "",
        Bookquerylist: [],
        Bookposted: "",
     
    },
    reducers: { 

        setBooksList(state, { payload }) {
            state.Booklist = payload;
        },
        // setStatesId: (state, {payload}) => {
        //     state.statesId = {...state.statesId, stateName: payload.state_name, stateId: payload.state_id}
        // },

        setAscBookList(state, { payload }) {
            state.Ascbooklist = payload;
        },
        setDescbooklist(state, { payload }) {
            state.Descbooklist = payload;
        },
        setBooksearchquery(state, { payload }) {
            state.Booksearchquery = payload;
        },

        setBookquerylist(state, action) {
            state.Bookquerylist = action.payload;
        },
        setBookposted(state, action) {
            state.Bookposted = action.payload;
        },
        // setCityId(state, action) {
        //     state.cityId = action.payload;
        //     // console.log(state.cityId,"cityId")
        // },
        // setCitStateId(state, action) {
        //     state.citstateId = action.payload;
        // },
        // setState(state, action) {
        //     state.states = action.payload;
        // }
    }
})

export const { setBooksList, setDescbooklist, setAscBookList, setBooksearchquery, setBookquerylist, setBookposted  } = BookListReducer.actions;

export default BookListReducer

export const fetchAllBookList = () => async (dispatch) => {
    try {
        const response = await axios.get('http://64.227.142.191:8080/application-test-v1.1/books');        
        if (response) {
            dispatch(setBooksList(response.data));
            console.log(response.data.data, "Data fetched successfully");
        } else {
            console.error("No data received from the server");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const Filtered_BookList = (searchquery) => async (dispatch) => {
const data = searchquery === "" || searchquery ===null || searchquery === undefined ? null : searchquery;
console.log(searchquery,data,  "wtf")

    try {
        const response = await axios.get(`http://64.227.142.191:8080/application-test-v1.1/books?title=${data}`);
        if (response) {
            dispatch(setBookquerylist(response.data));
            console.log(response.data.data, "Data fetched successfully");
        } else {
            console.error("No data received from the server");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchAscBookList = () => async (dispatch) => {
    try {
        const response = await axios.get('http://64.227.142.191:8080/application-test-v1.1/books?DIR=ASC');
        
        if (response) {
            dispatch(setAscBookList(response.data));
            console.log(response.data.data, "Data fetched successfully in Asc");
        } else {
            console.error("No data received from the server");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchDescBookList = () => async (dispatch) => {
    try {
        const response = await axios.get('http://64.227.142.191:8080/application-test-v1.1/books?DIR=DESC');
        
        if (response) {
            dispatch(setDescbooklist(response.data));
            console.log(response.data.data, "Data fetched successfully in Desc");
        } else {
            console.error("No data received from the server");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const postaBook = (bookData) => async (dispatch) => {
    try {
        // Sending a POST request to the server with the book data
        const response = await axios.post('http://64.227.142.191:8080/application-test-v1.1/books', bookData);
        
        if (response && response.data) {
            // Dispatching an action to update the Redux store with the new book list
            dispatch(setBookposted(response.data));
            console.log('Data posted successfully:', response.data);
        } else {
            console.error('No data received from the server');
        }
    } catch (error) {
        console.error('Error posting data:', error);
    }
};


// export const fetchallbooklist = (token) => async dispatch => {

//     let response = await get('http://64.227.142.191:8080/application-test-v1.1/books')
//     .catch(
//         function (error) {
//             console.log(error, "lol_error")
       
//         }
//       )
//     if(response && response.data){
//         dispatch(setStatesId(response.data))
//         console.log(response.data, response, "lol")
//     }
//     else{
//         console.log("error lol", "lol")
       
//         // dispatch(masterDataFetchedSuccess([]))
//     }
// }



// export const uploadFileData = (processObject, files, auth) => async (dispatch, getState) => {

//     try {
//         // var dataObject = data
//         if (files.length) {
//             await Promise.all(files.map(async (item) => {
//                 console.log(item.path, 'formDatas')

//                  var formData = new FormData();
//                  const dataObj = {
//                      "jodosessionid": "12345678900",
//                      "filepath": item.path,
//                      "filename": item.name,
//                      "requestdatetime": item.lastModifiedDate
//                  }
//                  formData.append("file", item);
//                  formData.append("data", JSON.stringify(dataObj))
//                  console.log(formData, 'formDatas')


                
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_MASTER + 'country_state_city/country', {

//                      //   let response = await BaseUrl.get(apiUrlCall.CRUD_API_SCRIPT, {
//                      headers: {
//                          'ACS_SESSION_ID': auth.token,
//                      }
//                  })
//                  dispatch(setfileData(fileresponse))
//                  console.log(fileresponse, 'formDatas')

//              }))
//           }

//              let response = await BaseUrl.put(serviceUrl().CRUD_API_PROCESS, processObject, {
//                  //   let response = await BaseUrl.get(apiUrlCall.CRUD_API_SCRIPT, {
//                  headers: {
//                      'ACS_SESSION_ID': auth.token,
//                  }
//              })
         
//              if (response.data.status === 1) {
//                  dispatch(setsnackBar({
//                      message: response.data.statusdesc,
//                      open: true,
//                      severity: 'success'
//                  }))
//                  dispatch(setprocessData());
//                  console.log(response, 'processData');
//              }
//               else {
//                  dispatch(setsnackBar({
//                      message: response.data.statusdesc,
//                      open: true,
//                      severity: 'error'
//                  }))
//              }
//     } catch (err) {
//         dispatch(HandleError(err))
//     }
// };

// export const fetchmasterdata = (token, data) => async (dispatch, getState) => {

//     const ids = getState().userTemplate.countryId;
//     // console.log(ids, 'datas')
//     // useEffect(() => {
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_MASTER + 'country_state_city/country', {
//         headers: {
//             'ACS_SESSION_ID': token,
//             // token: "testtoken",
//         }
//     })
  
//     .catch(
//         function (error) {
//         //   dispatch(HandleError(error))
//         dispatch(setsnackBar({
//             message: "Failed to load Location Data",
//             open: true,
//             severity: 'error'
//         }))
//         dispatch(masterDataFetchedSuccess([]))
//         }
//       )
//     if(response && response.data && response.data.status === 1){
//         dispatch(setCountries(response.data))
//     }
//     else{
//         dispatch(setsnackBar({
//             message: "Failed to load Location Data",
//             open: true,
//             severity: 'error'
//         }))
//         dispatch(masterDataFetchedSuccess([]))
//     }
// };

// export const statedata = (id, token, data) => async (dispatch, getState) => {
    
//     const id = getState().userTemplate.saveData.countryId;
//     const token = getState().auth.token;
//     // console.log(id, 'countryid');
    
//     const defaultstatename= getState()?.userList?.payload[0]?.countryid;
//     // console.log(defaultstatename, 'countryids');

//     // const data = data
//        const defaultname= (id === ""|| id===null ) ? defaultstatename : id ;
        
//     // console.log(defaultname, 'token')
       
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_MASTER + 'country_state_city/state' + "/" + defaultname, {
     
//         headers: {
//             // 'ACS_SESSION_ID': 'cab69fc13054867c2c766f2719207160ad16b6346a5e1750c9ead070cd34',
//             'ACS_SESSION_ID': token,
//             // token: "testtoken",
//         }
//     })
 
//     .catch(
//         function (error) {
//         //   dispatch(HandleError(error))
//         // dispatch(setsnackBar({
//         //     message: "Failed to load Location Datas",
//         //     open: true,
//         //     severity: 'error'
//         // }))
//         dispatch(masterDataFetchedSuccess([]))
//         }
//       )
//     if(response && response.data && response.data.status === 1){
//         dispatch(setState(response.data))
//     }
//     else{
//         // dispatch(setsnackBar({
//         //      message: "Failed to load Location Dataaas",
//         //     open: true,
//         //     severity: 'error'
//         // }))
//         dispatch(masterDataFetchedSuccess([]))
//     }
// };

// export const citydata = (cityid, token) => async (dispatch, getState) => {
    
//     const token = getState().auth.token;
//     // const stateId = getState().user.state.stateId;
//     const id = getState().userTemplate.saveData.countryId;
    
//     const defaultstatenames= getState().userList.payload[0].countryid;
 
//        const defaultnames= (id === ""|| id===null ) ? defaultstatenames : id ;
//     // const id = getState().userTemplate.countryId;

//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_MASTER + 'country_state_city/city' + "/"  + defaultnames + "/" + cityid, {
     
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
      
//     })
    
//     .catch(
//         function (error) {
//         //   dispatch(HandleError(error))
//         // dispatch(setsnackBar({
//         //     message: "Failed to load Location Data",
//         //     open: true,
//         //     severity: 'error'
//         // }))
//         dispatch(masterDataFetchedSuccess([]))
//         }
//       )
//     if(response && response.data && response.data.status === 1){
//         dispatch(setCity(response.data))
//     }
//     else{
//         // dispatch(setsnackBar({
//         //     message: "Failed to load City Data",
//         //     open: true,
//         //     severity: 'error'
//         // }))
//         dispatch(masterDataFetchedSuccess([]))
//     }
// };
       
// export const getOrgDetail = (token) => async (dispatch) => {
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_ORG + 1, {
//       headers: {
//         'ACS_SESSION_ID': token
//       }
//     })
//       .then(response => {
//         if (response.data.status === 1) {
//         //   dispatch(setOrganizationDetail(response.data.organisationdetails[0]))
//           if (response.data.organisationdetails[0].organisationparameterdetails.length > 0) {
//             // dispatch(setParamID(response.data.organisationdetails[0].organisationparameterdetails.find(id => id.parameter_id === 138)))
//             let sid = response.data.organisationdetails[0].organisationparameterdetails.find(id => id.parameter_id === 138)
//             if (sid === undefined) {
//               dispatch(setorgAlias(String(undefined)))
//             } else {
//               dispatch(setorgAlias(sid.detail_description))
//             }
//           }
  
//         }
//       })
//       .catch(
//         function (error) {
//           dispatch(HandleError(error))
//         }
//       )
// };

// export const fetch_Template = (userid, token) => async dispatch => {
//     dispatch(inProgress())
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_USERS + userid, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
//     })
//     .catch(error => {
//         dispatch(HandleError(error))
//         dispatch(setsnackBar({
//             message: "Unable to view the user please try again later",
//             open: true,
//             severity: 'error'
//         }))
//         dispatch(userTemplateFailed("Unable to view the user please try again later"))}
//         )
//     if (response && response.data && response.data.status === 1) {
//         // console.log(response.data.userdetails[0])
//         let newList = response.data.userdetails.slice()
//         dispatch(userTemplateFetchedSuccessfully(newList));
//     }
//     else{
//         dispatch(setsnackBar({
//             message: "Unable to view the user please try again later",
//             open: true,
//             severity: 'error'
//         }))
//         dispatch(userTemplateFailed())
//     }
// }

// export const upload_UserImg = (imgInfo, token) => async dispatch => {
//     dispatch(imgUploadInProgress());
//     let data = {
//         filename: imgInfo.filename,
//         filedata: imgInfo.filedata
//     }
//     let response = await BaseUrl.post(apiUrlCall.UPLOAD_IMG_API, data, {
//         headers: {
//             'ACS_SESSION_ID': token
//         }
//     })
//     .catch(error => {
//         dispatch(HandleError(error))
//         dispatch(setsnackBar({
//             message: "Unable to upload the image. Please try again later",
//             open: true,
//             severity: "error"
//         }))
//         dispatch(imgUploadFailed("Unable to upload the image. Please try again later"))})
//     if(response && response.data && response.data.status === 1){
//         // dispatch(setsnackBar({
//         //     message: "Image Uploaded Successfully",
//         //     open: true,
//         //     severity: "success"
//         // }))
//         dispatch(imgUploadSuccess(response.data))
//     }
//     else{
//         dispatch(setsnackBar({
//             message: "Unable to upload the image. Please try again later",
//             open: true,
//             severity: "error"
//         }))
//         dispatch(imgUploadFailed())
//     }
// }

// export const addNew_Template = (token, data, orgId, errorCodesUserTemplate) => async (dispatch, getState) => {
//     dispatch(setapiRequestPending(true))
//     let {userList} = getState();
//     // dispatch({
//     //     type: 'master/setSavePage',
//     //     payload: ""  
//     // })
//     let response = await BaseUrl.post(apiUrlCall.CRUD_API_USERS, data, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         },
//     })
//     .catch(error => {
//         dispatch(setapiRequestPending(false))

//         // dispatch(HandleError(error))
//         dispatch(setsnackBar({
//             message: "Internal server error. Please try again later.",
//             open: true,
//             severity: "error"
//         }))
//         // dispatch(userTemplateFailed("Unable to add the user please try again later"))
//     })
//     if(response && response.data && response.data.status === 1){
//         // let list = userList.payload.slice();
//         // let list1 = list.concat(response.data.userdetails);
//         // let mapThisUserIdToProcess = response.data.userdetails[0].userid
//         // dispatch(setUserselect(mapThisUserIdToProcess))
//         dispatch(setmapThisUserIdToProcess(response.data.userdetails[0].userid))
//         // console.log(response.data.userdetails[0].userid)
//         dispatch(fetchUserList(token, orgId))
//         dispatch({
//             type: 'master/setRenderpage',
//             payload: 'user'  
//         })
//         dispatch(setsnackBar({
//             message: "User details saved successfully",
//             open: true,
//             severity: "success"
//         }))  
//         dispatch(setchangesDetectedInModule(false))
//         // dispatch({
//         //     type: "userList/fetchedUserListSuccess",
//         //     payload: list1
//         // })
        
        
//         dispatch(setapiRequestPending(false))

//         dispatch(setopenMapUserToProcessDialogBox(true))
//         // history.push("user")
//     }
   
//     else{
//         dispatch(setapiRequestPending(false))

//         dispatch(setsnackBar({
//             // message: errorCodesUserTemplate[response && response.data.error],
//             message: "Interal server error. Please try again later",
//             open: true,
//             severity: "error"
//         }))
//         // dispatch(userTemplateFailed())
//     }
// }

// export const saveEdited_Template = (token, data, orgId, path, errorCodesUserTemplate) => async (dispatch, getState) => {
//     dispatch(setapiRequestPending(true))
//     let {userList} = getState();
//     let response = await BaseUrl.put(apiUrlCall.CRUD_API_USERS, data, {
//         headers: {
//             // 'ACS_SESSION_ID': token,
//             'content-type': 'application/json',
//             'token': Confdata.token,
//             'token_secret': Confdata.tokensecret
//         },
//     })
//     .catch(error =>{
//         // dispatch(HandleError(error))
//         dispatch(setapiRequestPending(false))
//         dispatch(setsnackBar({
//             message: "Internal server error. Please try again later",
//             open: true,
//             severity: "error"
//         })) 
//         // dispatch(userTemplateFailed("Unable to add the user please try again later"))
//     })
//     if(response && response.data && response.data.status === 1){
        
//         if (path==="toolbar") {
//             dispatch(setsnackBar({
//                 message: "User details saved successfully",
//                 open: true,
//                 severity: "success"
//             }))
//             // dispatch({
//             //     type: 'master/setRenderpage',
//             //     payload: 'user'
//             // })
//             // dispatch(setuserProfileName(response.data.userdetails))
//             // console.log(response.data.userdetails, "lmao");
//             dispatch(setuserProfileName(response.data.userdetails[0].username));
            
//             dispatch(setapiRequestPending(false))
//         } else {
//             dispatch(setuserProfileName(response.data.userdetails[0].username));
//             dispatch(setsnackBar({
//                 message: "User details saved successfully",
//                 open: true,
//                 severity: "success"
//             })) 
//             dispatch(fetchUserList(token, orgId))
//             dispatch(setchangesDetectedInModule(false))
//             dispatch({
//                 type: 'master/setRenderpage',
//                 payload: 'user'  
//             })  
//             // history.push("user")
//         }
//         dispatch(setapiRequestPending(false))
//     }
//     else{
//         dispatch(setapiRequestPending(false))

//         dispatch(setsnackBar({
//             message: "Internal server error. Please try again later.",
//             open: true,
//             severity: "error"
//         }))
//         // dispatch(userTemplateFailed())
//     }
// }

// export const checkduplicateLogin = (token, data, errorCodesUserTemplate) => async (dispatch) => {
//     let response = await BaseUrl.post(apiUrlCall.CRUD_API_USERS+'duplicate_login', data, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         },
//     })
//     .catch(error => {
//         dispatch(HandleError(error))
//         dispatch(setsnackBar({
//             message: "Unable to add the user. Please try again later",
//             open: true,
//             severity: "error"
//         })) 
//     })
//     if(response && response.data && response.data.status === 1){
//         dispatch(setsnackBar({
//             message: 'Login ID verified successfully',
//             open: true,
//             severity: "success"
//         }))
//     }
    
//     else{
//         dispatch(setsnackBar({
//             message: errorCodesUserTemplate[response.data.status],
//             open: true,
//             severity: "error"
//         }))
//     }
// }

// export const getLanguagesData = (token) => async(dispatch) => {
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_MASTER+'language', {
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
//     })
//     .catch(
//         function (error){
//             dispatch(setretryCallingMasterLanguageAPI(0))
//             dispatch(setmasterLanguageData([]))
//             // dispatch(setsnackBar({
//             //     message: "Unable to load languages data",
//             //     open: true,
//             //     severity: 'error'
//             // }))
//             setTimeout(() => {
//                 dispatch(getLanguagesData(token))
//             }, 10000);
//         }
//     )
//     if(response && response.data && response.data.status === 1){
//         dispatch(setmasterLanguageData(response.data.languagemaster))
//         dispatch(setretryCallingMasterLanguageAPI(1))
//     } else {
//         dispatch(setmasterLanguageData([]))
//     }
// }

// export const actionChanged = (value) => templateActionChanged(value);
// export const indexValueChanged = (value) => indexChanged(value);

