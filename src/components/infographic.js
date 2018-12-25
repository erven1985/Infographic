import React, {Component, Fragment} from 'react';
import SideBar from './sidebar'
import ManageIcon from './manageicon'
import Cover from './cover'

class Infographic extends Component {
  
  state = {
    icons: [
    {src: "https://www.sare-infographic.com/images/crop_icon_name.png",id:"cover_crops", cls: "manage_icons one"},
    {src: "https://www.sare-infographic.com/images/crop_rotation_icon.png", id: "crop_rotation", cls: "manage_icons two"},
    {src: "https://www.sare-infographic.com/images/conservation_tillage_icon.png", id: "conservation_tillage", cls: "manage_icons three"},
    {src: "https://www.sare-infographic.com/images/soil_assessment_icon.png", id: "soil_assessment", cls: "manage_icons four"},
    {src: "https://www.sare-infographic.com/images/crop_livestock_icon.png", id: "crop_liverstock", cls: "manage_icons five"},
    {src: "https://www.sare-infographic.com/images/compost_icon.png", id: "compost", cls: "manage_icons six"},
    {src: "https://www.sare-infographic.com/images/micro_icon.png", id: "microorganisms", cls: "manage_icons seven"},
    {src: "https://www.sare-infographic.com/images/nematodes_icon.png", id: "nematodes", cls: "manage_icons eight"},
    {src: "https://www.sare-infographic.com/images/earthworms_icon.png", id: "earthworms", cls: "manage_icons nine"},
    {src: "https://www.sare-infographic.com/images/protozoa_icon.png", id: "protozoa", cls: "manage_icons ten"},
    {src: "https://www.sare-infographic.com/images/bacteria_icon.png", id: "bacteria", cls: "manage_icons eleven"},
    {src: "https://www.sare-infographic.com/images/fungi_icon.png", id: "fungi", cls: "manage_icons twelve"},
    {src: "https://www.sare-infographic.com/images/arthropods_icon.png", id: "arthropods", cls: "manage_icons thirteen"},
    {src: "https://www.sare-infographic.com/images/organic_matter_icon.png", id: "organic_matter", cls: "manage_icons fourteen"}
    ], 
    bool: false, 
    circleBackground: null,
    topIcon: null, 
    title: null, 
    color: "rgb(136, 55, 96)"
  }

  scanTitle(target) {
     switch(target) {
      case "cover_crops": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_cc_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_cc_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(136, 55, 96)"
        }
      break;
      case "crop_rotation": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_cr_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_cr_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(136, 55, 96)"
        }
      break; 
      case "conservation_tillage": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_ct_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_ct_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(136, 55, 96)"
        }
      break;
      case "compost": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_c_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_c_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(136, 55, 96)"
        }
      break;
      case "soil_assessment": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_sa_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_sa_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(136, 55, 96)"
        }
      break;
      case "crop_liverstock": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_ls_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_ls_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join('-') + " Integration",
          color: "rgb(136, 55, 96)"
        }
      break;
      case "microorganisms": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_mo_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_mo_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "nematodes": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_n_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_n_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "earthworms": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_ew_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_ew_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "protozoa": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_ps_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_ps_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "bacteria": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_b_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_b_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "fungi": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_f_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_f_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "arthropods": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_ar_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_ar_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
      case "organic_matter": 
        return {
          bool: true, 
          circleBackground: "http:\//sare-infographic.com/images/bb_om_bg.png", 
          topIcon: "http:\//sare-infographic.com/images/bb_om_title_icon.png", 
          title: target.split('_').map((el) => { return el[0].toUpperCase() + el.slice(1)}).join(' '), 
          color: "rgb(67, 135, 190)"
        }
      break;
    }
  }

  
  onClickIcon(e) {
    this.setState(this.scanTitle(e.target.alt))
  }

  changeBool() {
    this.setState({
      bool: false
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-div">
          {
            this.state.bool ?  

            <Fragment>
              <Cover onClick={this.changeBool.bind(this)} circleBackground={this.state.circleBackground} topIcon={this.state.topIcon} title={this.state.title} color={this.state.color} />
            </Fragment>

             : null
          }
       		<div id="main_title">
            <h4>How Can You Improve Your Soil's Health?</h4>  
          </div>

          <div className="desc_frame">
            <div className="desc_frame_div"></div>
          </div>

         {
          this.state.icons.map((el) => {
              return(
                   <ManageIcon 
                      key={el.id} 
                      id={el.id} 
                      src={el.src} 
                      cls={el.cls} 
                      onClick={this.onClickIcon.bind(this)}                      
                  />
                   )
          })
         }
        </div>
      </div>
    );
  }
}

export default Infographic;