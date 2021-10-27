import React from "react";
import { Link } from "react-router-dom";

export class Sidebar extends React.Component{
    render() {
        return(
            <div>
                <div style={{backgroundColor:"brown", position:"relative"}}><h1 style={{textAlign:"center", color:"white"}}>Admin Panel</h1></div>
            <div style={{flex:"1", position:"sticky", width:"200px"}}>
                    <div style={{padding:"20px", color:"blue", backgroundColor:"brown"}}>
                        <div style={{marginBottom:"10px"}}>
                            <h3 style={{color:"white"}}>Dashboard</h3>
                            <ul style ={{listStyle:"none", padding:"5px"}}>
                                <Link to="/"><li style={{padding:"5px", display:"flex", alignItems:"center"}}>Ana Sayfa</li></Link>
                                <Link to="/bar"><li style={{padding:"5px",display:"flex",alignItems:"center"}}>Bar</li></Link>
                                <Link to="/map"><li style={{padding:"5px", display:"flex",alignItems:"center"}}>Harita</li></Link>
                            </ul>
                        </div>
                        <div style={{marginBottom:"10px"}}>
                            <h3 style={{color:"white"}}>İşlemler</h3>
                            <ul style = {{listStyle:"none", padding:"5px"}}>
                                <Link to="/urunler"><li style={{padding:"5px", display:"flex",alignItems:"center"}}>Ürünler</li></Link>
                                <Link to="/satilanlar"><li style={{padding:"5px", display:"flex",alignItems:"center"}}>Satılanlar</li></Link>
                                <Link to="/odemeler"><li stlye={{padding:"5px",display:"flex", alignItems:"center"}}>Ödemeler</li></Link>
                            </ul>
                        </div>
                        <div style={{marginBottom:"10px"}}>
                            <h3 style={{color:"white"}}>Satışlar</h3>
                            <ul style={{listStyle:"none",padding:"5px"}}>
                                <Link to="/satilanlar"><li style={{padding:"5px", display:"flex",alignItems:"center"}}>Satılanlar</li></Link>
                                <Link to="/satilanlar"><li style={{padding:"5px", display:"flex",alignItems:"center"}}>Satılanlar</li></Link>
                                <Link to="/satilanlar"><li style={{padding:"5px",display:"flex",alignItems:"center"}}>Satılanlar</li></Link>
                            </ul>
                        </div>
                        <Link to="/login">Çıkış yap</Link>
                    </div>
                </div>
                </div>
        );
    }
}

