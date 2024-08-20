



// API Endpoints:
// 1. GET Request - http://64.227.142.191:8080/application-test-v1.1/books?title=ab
// 2. POST Request - http://64.227.142.191:8080/application-test-v1.1/books
// 3. PUT Request - http://64.227.142.191:8080/application-test-v1.1/books/{id} 



// import React from 'react'
// import { Grid, Typography, Tooltip } from "@mui/material";
// import CustomButton from "./custom-button";
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import CardLayout from './CardLayout';
// import {ReactComponent as CallIcon} from '.././assets/Images/call-icon-toolbar.svg';
// import { useSelector } from 'react-redux';
// import makeStyles from '@mui/styles/makeStyles';
// import { useTranslate } from 'react-redux-multilingual/lib/context';



// const useStyles = makeStyles((theme) => ({
//     gridMargin:{
//         margin:"10px",
//     },
//     gridIcon:{
//         justifyContent:"flex-end"
//     },
//     iconColor:{
//         color:"#4d4e4e"
//     },
//     custName:{
//         display:"flex",justifyContent:"space-around"
//     },
//     nocenter: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: "9px"
//     },
//     emptyrow: {
//         display: "none",
//     },
//     epmty: {
//         height: "2em"
//     }

// }));

// const UserCard = ({ previewData }) => {
//     const classes = useStyles();
//     const { contact1, contact2, contact3, contact4, contact5, sessionname, customername, nextcalltime, sessioncalllistid, customercode } = previewData;
//     const { selectedProcess } = useSelector(state => state.globalreducer);
//     const { previewprocessId } = useSelector(state => state.globalreducer);
//     const t = useTranslate();

//     const contacts = [contact1, contact2, contact3, contact4, contact5].filter(contact => contact);
// console.log(contacts, "lol2")
//     const [firstContact, secondContact] = contacts.slice(0, 2);

//     console.log(contact1, contact2, contact3, contact4, contact5, "lol");

//     const customernames =  customername.slice(0,1).toUpperCase() + customername.slice(1, customername.length)

//     const handleCrmAction = () => {
//         let obj = {
//             "processid" : previewprocessId,
//             "customercode":customercode,
//             "contactnumber":firstContact ?? secondContact,
//             "status": 71,
//             "sessioncalllistid": sessioncalllistid,
//             "command":"previewcrm"
//         }
//         let stringifiedObj = JSON.stringify(obj)
//         window.parent.postMessage(stringifiedObj)
//     }

//     const handleDialAction = () => {
//         let obj = {
//             "processid" :previewprocessId,
//             "customercode":customercode,
//             "contactnumber":firstContact ?? secondContact,
//             "sessioncalllistid": sessioncalllistid,
//             "status": 31,
//             "command":"dial"
//         }
//         let stringifiedObj = JSON.stringify(obj)
//         window.parent.postMessage(stringifiedObj)
//     }

//     return(
//         <CardLayout
//             width='190px'
//             height={"11em"}
//             cursor="default"
//         >
//             <Grid rowSpacing={9} className={classes.gridMargin}>
//                 <Grid container className={classes.gridIcon}>
//                     <Tooltip title={t('crm')}>

//                         <TextSnippetIcon
//                             className={${'icon-medium'} ${classes.iconColor}}
//                             onClick={handleCrmAction}
//                         />
//                     </Tooltip>
//                 </Grid>
//                 <div className={classes.custName}>
//                 <Tooltip title={customernames}>
//                 <Typography variant='subHeadingname'>{(customernames.length > 10 ? customernames.slice(0, 13) + '...' : customernames) ?? ""}</Typography>
//                 </Tooltip>
//                </div>

//                {firstContact && <Grid className={classes.nocenter} container>
//                     <Tooltip  title={t('dial')}  placement='top'>
//                         <CallIcon
//                         className='icon-big'
//                             onClick={handleDialAction}
//                         />
//                     </Tooltip>
//                     <Typography variant="medium">{(firstContact.length > 11 ? firstContact.slice(0, 10) + '...' : firstContact) ?? ""}</Typography>
//                 </Grid>}

//                 {secondContact === undefined  ?
//                     <Grid className={classes.epmty} container>
//                         <Tooltip title={t('dial')} placement="top">
//                             <CallIcon
//                             className={classes.emptyrow}
//                             />
//                         </Tooltip>
//                         <Typography variant="medium">{}</Typography>
//                     </Grid>
//                  :
//                     <Grid className={classes.nocenter} container>
//                         <Tooltip title={t('dial')} placement="top">
//                             <CallIcon
//                                 className="icon-big"
//                                 onClick={handleDialAction}
//                             />
//                         </Tooltip>
//                         <Typography variant="medium">{secondContact}</Typography>
//                     </Grid>
//                 }

//                 <Tooltip title={t('nextcalltime')} >
//                     <Typography textAlign={'center'} variant='smaller'>{ nextcalltime.slice(0, -6) +" "+ "PM"}</Typography>
//                 </Tooltip>

//             </Grid>
//         </CardLayout>
//     )
// }

// export default UserCard;


// export const FETCH_CALLBACK_LIST = (data, ACS_SESSION_ID) => async(dispatch) => {
//     let dataJson = JSON.stringify(data)
//     const headers = { 'ACS_SESSION_ID': ACS_SESSION_ID };

//     try {
//         const { data } = await AxiosInstance.post("/ACSWebservice/ACSWebserviceHandle?data=" + dataJson, { headers: headers})
//         dispatch(setShowLoader(true))
//         // if(data.status === 3 && data.statusdescription === "success"){
//         //     dispatch(setProcessList(data.processdetails))
//         // }
      
//         if(data.status === 3){
//             dispatch(setpreviewCallBackList(data.calldetails))
//             dispatch(setrecordnotavlerror(0))
//             // dispatch(settimeouterror(0))
//         }
//         else{
//             dispatch(setrecordnotavlerror(1))
//             // dispatch(settimeouterror(1))
            
//         }
        
//     } catch (error) {
//         console.log(error)
//     } finally {
//         dispatch(setShowLoader(false))
//     }
// }



// import { makeStyles } from '@material-ui/core/styles';
// import React, { useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import { useState } from "react";
// import { Typography, Grid, CardContent, Card, Tooltip } from "@mui/material";
// import InputDropDownTime from "./InputDropDownTime";
// // import AdapterDateFns from '@mui/lab/AdapterDateFns';
// // import {LocalizationProvider} from '@mui/lab';
// // import {AdapterDateFns} from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import { DesktopTimePicker } from '@mui/x-date-pickers';
// // import {AdapterDateFns} from '@mui/x-date-pickers-pro';

// import { useDispatch, useSelector } from 'react-redux';
// import { useTranslate } from 'react-redux-multilingual/lib/context';
// import {
//     fetchtimeTemplate, settemplateId, settemplateName,
//     settimetemplatedetails, setfromTime, settoTime, setSelectedTemplate,
//     setzoneId, setndayArray, setSaveTimeAlert
// } from './TimeTemplateReducer';
// import { setSavePage, setRenderpage } from '../../../Reducers/masterReducer';
// import { CircularProgress } from '@mui/material';
// import { addtimeTemplate, saveEditedtimeTemplate } from './TimeTemplateReducer';
// import InputComponent from '../../../Components/InputComponent';
// import ActiveIcon from '../../../Assets/Images/Active.svg';
// import InactiveIcon from '../../../Assets/Images/Inactive.svg';
// import { setchangesDetectedInModule } from '../../User/UserReducer/UserTemplateReducer';
// import SaveAlertDialog from '../../../Components/SaveAlertDialogue';
// import AutoComplete from '../../../Components/AutoComplete';
// import FilterCards from '../../../Components/FilterCards';
// import { useHistory } from "react-router-dom";

// const useStyles1 = makeStyles({
//     tempGrid: {
//         height: '100%', marginLeft: '3rem', marginTop: '20px'
//     },
//     tempInputComponent: {
//         margin: '0rem 3rem 1rem 0', width: '22rem'
//     },
//     tempStartTime: {

//         margin: '0rem 3rem 1rem 0',
//         width: '22rem',
//         fontSize: '25pt',
//         cursor: 'none'

//     },
//     TempEndTime: {
//         margin: '0rem 2rem 1rem 0', width: '22rem', fontSize: '25pt'
//     },

// })

// const Weekday = ({ nday, day, handleNDay }) => {

//     const t = useTranslate();
//     const ndayArray = useSelector(state => state.timeTemplate.ndayArray);
//     const action = useSelector(state => state.timeList.action);
//     const timetemplatedetails = useSelector(state => state.timeTemplate?.timetemplatedetails);

//     // const action = actions === "" ? "Add" : "Edit"

//     const [clicked, setclicked] = useState(action === "Add" &&
//         ((day !== t('sat') && day !== t('sun')) ? true : false)
//     );

//     useEffect(() => {
//         action !== "Add" && (ndayArray.includes(nday) ? setclicked(true) : setclicked(false))
//     }, [ndayArray, action])

//     const handleClick = (bool) => {
//         if (action === "View" || (timetemplatedetails.length === 1 && !bool)) return
//         setclicked(bool);
//         handleNDay(bool, nday)
//     };

//     return (
//         <>
//             <FilterCards name={day} selectedIndex={clicked} handleSelect={() => handleClick(!clicked)} />

//         </>
//     )
// }

// const WorkingDays = () => {

//     const dispatch = useDispatch();
//     const t = useTranslate();
//     const [days] = useState([
//         { 'nday': 1, 'day': t('sun') },
//         { 'nday': 2, 'day': t('mon') },
//         { 'nday': 3, 'day': t('tues') },
//         { 'nday': 4, 'day': t('wed') },
//         { 'nday': 5, 'day': t('thurs') },
//         { 'nday': 6, 'day': t('fri') },
//         { 'nday': 7, 'day': t('sat') }
//     ])
//     const store = useSelector(store => store);
//     const zoneid = useSelector(state => state.timeTemplate.zoneid);
//     const fromTime = useSelector(state => state.timeTemplate.fromTime);
//     const toTime = useSelector(state => state.timeTemplate.toTime);
//     let timetemplatedetails = useSelector(state => state.timeTemplate.timetemplatedetails);
//     const action = useSelector(state => state.timeList.action);
//     const ndayArray = useSelector(state => state.timeTemplate.ndayArray);
//     const storeExistingDetail = useSelector(state => state?.timeTemplate?.storeExistingDetail)
       
//     useEffect(() => {
//         if (timetemplatedetails.length == 0) {
//             timetemplatedetails = storeExistingDetail

//         }
//         console.log(storeExistingDetail,"rutu12")
//     })
//     useEffect(() => {

//         if (action === "Add") {

//             let arr = [];
//             let i = 0;
//             while (i !== 7) {
//                 let weekday = {
//                     fromtime: fromTime,
//                     totime: toTime,
//                     timezone: zoneid,
//                     description: "",
//                     working: 1,
//                     selectionytype: 1,
//                     nday: "",
//                     dtdate: ""
//                 }
//                 if (i !== 0) {
//                     weekday.nday = i + 1;
//                     arr.push(weekday);
//                 }
//                 // if(i!==0 && i!==6){
//                 //     weekday.nday = i+1;
//                 //     arr.push(weekday);
//                 // }
//                 i++;
//             }
//             dispatch(settimetemplatedetails(arr));
//             dispatch(setSelectedTemplate(arr));

//             // console.log("lmao_ifuse", arr)

//         } else {
//             let arr = [];
//             let i = 0;
//             while (i !== ndayArray.length) {
//                 let weekday = {
//                     fromtime: fromTime,
//                     totime: toTime,
//                     timezone: zoneid,
//                     description: "",
//                     working: 1,
//                     selectionytype: 1,
//                     nday: "",
//                     dtdate: ""
//                 }
//                 weekday.nday = ndayArray[i];
//                 arr.push(weekday);
//                 i++;
//             }
//             // console.log("lmao_elseuse", arr)

//             dispatch(settimetemplatedetails(arr));
//             // dispatch(setSelectedTemplate(arr));

//         }

//     }, [ndayArray, fromTime, toTime])

//     // useEffect(() => {
//     //     if (timetemplatedetails.length == 0) {
//     //         let arr = JSON.parse(JSON.stringify(timetemplatedetails));
//     //         let i = 0;
//     //         while (i !== arr.length) {
//     //             arr[i].fromtime = fromTime;
//     //             arr[i].totime = toTime;
//     //             arr[i].timezone = zoneid;
//     //             i++;
//     //         }
//     //         // console.log("lmao_use", arr);
//     //         // console.log("lmao_use", timetemplatedetails);
//     //         dispatch(setSelectedTemplate(arr))

//     //         // dispatch(fetchtimeTemplate(6145, store.auth.token))
//     //         dispatch(settimetemplatedetails(arr));
//     //     }

//     // }, [fromTime, toTime, zoneid])



//     // const filteredData = datas.filter(data =>  data.nday === 1);

//     //  console.log(filteredData, "datas");

//     const handleNDay = (bool, value) => {
//         dispatch(setchangesDetectedInModule(true));

//         let arr = [...timetemplatedetails];
//         // console.log("lmao_bool", bool)
//         // console.log("lmao_bool", value)

//         if (bool) {
//             let weekday = {
//                 fromtime: fromTime,
//                 totime: toTime,
//                 timezone: zoneid,
//                 description: "",
//                 working: 1,
//                 selectionytype: 1,
//                 nday: "",
//                 dtdate: ""
//             }
//             weekday.nday = value;
//             arr.push(weekday);
//             dispatch(settimetemplatedetails(arr));
//             // dispatch(setSelectedTemplate(arr));

//             // console.log("lmao_ifffsdfsdf", arr)

//         }
//         else {
//             let array = arr.filter(temp => temp.nday !== value)
//             dispatch(settimetemplatedetails(array));
//             // dispatch(setSelectedTemplate(array));

//             // console.log("lmao_else", array)
//             // dispatch(settimetemplatedetails(arr));
//         }

//     }


//     // const handleNDay = (bool, value) => {
//     //     dispatch(setchangesDetectedInModule(true));

//     //     let arr = [...timetemplatedetails];
//     //     console.log(timetemplatedetails, "im_clicked");
//     //     console.log(arr, "im_clicked");

//     //     console.log(value, bool, "boolPrint");

//     //     if (bool) {
//     //       let weekday = {
//     //         fromtime: fromTime,
//     //         totime: toTime,
//     //         timezone: zoneid,
//     //         description: "",
//     //         working: 1,
//     //         selectionytype: 1,
//     //         nday: value,
//     //         dtdate: ""
//     //       };

//     //       arr.push(weekday);
//     //       console.log(weekday, "checkingweekday");
//     //       dispatch(settimetemplatedetails(arr));
//     //       console.log(arr, "arrayslol");
//     //     } else {
//     //       let trueValues = arr.filter(obj => obj.bool === true);
//     //       console.log(trueValues, "trueValues");
//     //       // Use trueValues for your desired purpose
//     //     }
//     //   };


//     return (
//         <>
//             <Grid container sx={{ margin: '1rem 0' }}>
//                 {
//                     days.map(value =>
//                         <Weekday
//                             key={value.nday}
//                             nday={value.nday}
//                             day={value.day}
//                             handleNDay={handleNDay}


//                         />
//                     )
//                 }
//             </Grid>

//         </>
//     )

// };


// const TimeTemplate = (id) => {
//     // console.log(id, "idddds")

//     const dispatch = useDispatch();
//     const t = useTranslate();
//     const classes = useStyles1();
//     const store = useSelector((state) => state);
//     const payload = useSelector(state => state.timeTemplate.payload)
//     const timeList = useSelector(state => state.timeList.payload);
//     const [value, setValue] = React.useState("");
//     // const [startTime, setstartTime] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
//     // const [endTime, setendTime] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
//     const templateid = useSelector(state => state.timeTemplate.templateid)
//     const options = ['option 1', 'option 2', 'option 3']
//     const [ZoneId, setZoneID] = useState()
//     const history = useHistory();
//     const templateId = store.timeTemplate.timetemplateId;
//     const storeExistingDetail = useSelector(state => state?.timeTemplate?.storeExistingDetail)
//     const toTime = useSelector(state => state.timeTemplate.toTime);

//     const action = store.timeList.action === "" ? "Edit" : "Add"

//     useEffect(() => {
//         store.timeList.action !== "Add" && dispatch(fetchtimeTemplate(id.id, store.auth.token));
//     }, []);
//     // console.log(payload, "pay");

//     useEffect(() => {
//         const zoneId = store.timeList.timezone.find(id => id.zoneid === store.timeTemplate.zoneid)
//         setZoneID(zoneId)
//     }, [store.timeTemplate.zoneid])

//     useEffect(() => {
//         let arr = [];
//         if (store.timeList.action !== "Add" && Object.entries(payload).length !== 0) {
//             dispatch(settemplateId(payload.templateid ? payload.templateid : ""));
//             dispatch(settemplateName(payload.templatename ? payload.templatename : ""));
//             dispatch(setfromTime(payload.timetemplatedetails && payload.timetemplatedetails[0] && payload.timetemplatedetails[0].fromtime));
//             dispatch(settoTime(payload.timetemplatedetails && payload.timetemplatedetails[0] && payload.timetemplatedetails[0].totime));
//             dispatch(setzoneId(Number(payload.zoneid)));

//             if (payload.timetemplatedetails) {
//                 for (let i of payload.timetemplatedetails) {
//                     arr.push(Number(i.nday))
//                 }
//                 let temp = arr.sort();
//                 dispatch(setndayArray(temp));
//             }
//         }
//         else if (store.timeList.action === "Add" ) {
//             dispatch(settemplateId(""));
//             dispatch(settemplateName(""));
//             dispatch(setfromTime("09:00:00"));
//             dispatch(settoTime("18:00:00"));
//             dispatch(setzoneId(49));
//         }

//     }, [payload, store.timeList.action])

// // console.log(payload.timetemplatedetails && payload.timetemplatedetails[0] && payload.timetemplatedetails[0]?.fromtime, "lo")

// //     useEffect(() => {
// //         if ((payload.timetemplatedetails && payload.timetemplatedetails[0] && payload.timetemplatedetails[0]?.fromtime) === "00:00:00") {
// //             dispatch(setfromTime("09:00:00"));
// //         }
// //     }, [payload.timetemplatedetails[0]?.fromtime])

//     // useEffect(()=> {
//     //     let i = 0;
//     //     while(i!==timeList.length){
//     //         if(templateid===timeList[i].templateid){
//     //             setindexValue(i)
//     //             break;
//     //         }
//     //         i++;
//     //     }
//     // }, [payload.length, templateid])

//     useEffect(() => {
//         if (store.master.savePage === "save_time_template") {
//             handleSave()
//         }
//     }, [store.master.savePage])

//     const errorCodesTimeTemplate = {
//         501: t('timeTemp_501'),
//         502: t('timeTemp_502'),
//         503: t('timeTemp_503'),
//         504: t('timeTemp_504'),
//         506: t('timeTemp_506'),
//         507: t('timeTemp_507'),
//         508: t('timeTemp_508'),
//         509: t('timeTemp_509'),
//         510: t('timeTemp_510'),
//         511: t('timeTemp_511'),
//         512: t('timeTemp_512'),
//         513: t('timeTemp_513'),
//         514: t('timeTemp_514'),
//         515: t('timeTemp_515'),
//         516: t('timeTemp_516'),
//         517: t('timeTemp_517'),
//         518: t('timeTemp_518'),
//         519: t('timeTemp_519'),
//         520: t('timeTemp_520'),
//         521: t('timeTemp_521')
//     }

//     const handleTemplateName = (e) => {
//         dispatch(setchangesDetectedInModule(true))
//         return dispatch(settemplateName(e.target.value))
//     }

//     const handleFromTime = (date) => {

//         dispatch(setchangesDetectedInModule(true))
//         let time = date.toTimeString().split(' ')[0];
//          return dispatch(setfromTime(time))
//     }
// // console.log(value, "timeval");

// // useEffect(() => {
    
  
// // }, [])


//     const handleToTime = (date) => {
//         dispatch(setchangesDetectedInModule(true))
//         let time = date.toTimeString().split(' ')[0];
//         return dispatch(settoTime(time))
//     }

//     const handleZoneChange = (value) => {

//         const zoneId = store.timeList.timezone.find(id => id.zonename === value)
//         if (zoneId) {
//             dispatch(setchangesDetectedInModule(true))
//             return dispatch(setzoneId(zoneId.zoneid));
//         }
//     }

//     const handleSave = () => {

//         dispatch(setSavePage(""))
//         let template = {};
//         template.templateid = store.timeTemplate.templateid;
//         template.templatename = store.timeTemplate.templatename;
//         // template.active = store.timeTemplate.active;
//         template.zoneid = store.timeTemplate.zoneid;
//         template.active = 1;
//         template.timetemplatedetails = store.timeTemplate.timetemplatedetails;
//         store.timeList.action === "Add" ?
//             dispatch(addtimeTemplate(template, store.auth.token)) :
//             dispatch(setRenderpage('Service'));
//         dispatch(saveEditedtimeTemplate(template, store.auth.token, store.process.processdetail.processid, store.process.processdetail.organisationid, errorCodesTimeTemplate))
//         history.push("/service");
//         // console.log(store.timeTemplate.timetemplatedetails, "lol")
//     }

//     const handleClickSaveAlert = () => {
//         dispatch(setSaveTimeAlert(false))
//         dispatch(setchangesDetectedInModule(false))
//         dispatch(setRenderpage('Service'))
//         history.push("/service")
//     }

//     const handleCloseSaveAlert = () => {
//         return dispatch(setSaveTimeAlert(false))
//     }

//     // console.log(new Date(`${new Date().toDateString()} ${store.timeTemplate.fromTime}`), "ddd")
//     // console.log(store.timeTemplate.fromTime, "ddd")
//     // console.log(store.timeTemplate.storeExistingDetail[0].fromtime, "lmao")

// //     const starttime = store?.timeTemplate?.storeExistingDetail[0]?.fromtime;
// // console.log(starttime, "lol")

// console.log( store.timeTemplate.fromTime,  "nigga")


//     return (
//         <>
//             {
//                 (store.timeTemplate.inprogress && store.timeTemplate.hasErrors === false) ?
//                     <Grid container justifyContent="center">
//                         <CircularProgress />
//                     </Grid>
//                     :
//                     <Grid className={classes.tempGrid}  >

//                         {/* {
//                     store.timeList.action!=="View" &&
//                     <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '7rem'}}>
//                         <ButtonCompent color='#053e5a' variant="contained" handleClick={handleSave}>{t('save')}</ButtonCompent>
//                     </div>
//                 } */}
//                         <Grid container >
//                             <InputComponent
//                                 value={store.timeTemplate.templatename}
//                                 className={`${'inputRounded'} ${classes.tempInputComponent}`}
//                                 handleChange={handleTemplateName}
//                                 variant={'outlined'}
//                                 label={t('templateName')}
//                                 disabled={store.timeList.action == "View" ? true : false}
//                             />

//                             <AutoComplete handleChange={handleZoneChange} className='inputRounded' value={ZoneId === undefined ? "" : ZoneId.zonename} options={store.timeList.timezone.map(i => i.zonename)} disabled={store.timeList.action == "View" ? true : false} label={t('timezone')} />

//                         </Grid>
//                         <Grid container>
//                             <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                 <DesktopTimePicker
//                                     // disabled={true}
//                                     style={{ cursor: 'none' }}
//                                     ampm={false}
//                                     label={t('starttime')}
//                                     value={new Date(`${new Date().toDateString()} ${store?.timeTemplate?.fromTime}`)}
//                                     // defaultValue={"09:00:00"}
//                                     // defaultValue={store.timeTemplate.fromTime || "09:00:00"} 
//                                     // value={new Date(`${new Date().toDateString()} ${store.timeTemplate.fromTime || "09:00:00"}`)}
//                                     // value={payload?.timetemplatedetails?.[0]?.fromtime}
//                                     onChange={(newValue) => handleFromTime(newValue) }

//                                     // disabled={store.timeList.action=="View" ? true : false}
//                                     renderInput={(params) =>
//                                         <TextField {...params}
//                                             onKeyPress={(e) => { if (e.key === "Backspace") return }}
//                                             className={`${'inputRounded'} ${classes.tempStartTime}`}
//                                             variant={'outlined'}
//                                             label={t('starttime')}
//                                         // disabled={store.timeList.action=="View" ? true : false}
//                                         />
//                                     }
//                                 />
//                               {console.log( new Date(`${new Date().toDateString()} 09:00:00`), store?.timeTemplate?.fromTime, "lmaonigga")}
//                               {console.log( new Date(`${new Date().toDateString()} ${store.timeTemplate.toTime}`), "lmao")}
//                             </LocalizationProvider>

//                             <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                 <DesktopTimePicker
//                                     // disabled={true}
//                                     ampm={false}
//                                     label={t('endtime')}
//                                     value={new Date(`${new Date().toDateString()} ${store.timeTemplate.toTime}`)}
//                                     onChange={(newValue) =>
//                                         handleToTime(newValue)
//                                     }
//                                     disabled={store.timeList.action == "View" ? true : false}
//                                     renderInput={(params) =>
//                                         <TextField {...params}
//                                             // onChange={()=>handleToTime(new Date(`${new Date().toDateString()} ${store.timeTemplate.toTime}`))}
//                                             className={`${'inputRounded'} ${classes.TempEndTime}`}
//                                             variant={'outlined'}

//                                             label={t('endtime')}
//                                             disabled={store.timeList.action == "View" ? true : false}
//                                         />
//                                     }
//                                 />
//                             </LocalizationProvider>
//                         </Grid>

//                         <Typography variant="subHeading">{t('selectworkingdays')}</Typography>

//                         <WorkingDays />


//                         {/* <Grid container sx={{ margin: '3rem 0' }}>
//                     {
//                         arr.map(day =>
//                             <Weekday day={day} />
//                         )
//                     }
//                 </Grid> */}


//                     </Grid>
//             }
//             <SaveAlertDialog
//                 open={store.timeTemplate.setSaveTimeAlert}
//                 title={'Changes not saved. Are you sure you want to proceed without saving changes ?'}
//                 handleClick={handleClickSaveAlert}
//                 handleClose={handleCloseSaveAlert}
//             />
//         </>
//     )
// }

// export default TimeTemplate;
