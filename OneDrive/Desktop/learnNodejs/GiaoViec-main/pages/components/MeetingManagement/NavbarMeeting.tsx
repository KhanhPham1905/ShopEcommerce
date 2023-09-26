import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarMeeting() {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="scrollmobile" id="navbar_meeting">
                <div className="navbar" >


                    <div className={`all_metting ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => handleTabClick('all')} >
                        <label className="wind_alm windo_one">
                            <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                            <p className="note_mett" style={{ margin: "0px" }}>Tất cả cuộc họp</p>
                            <input type="radio" name="number_meet" value="1"></input>
                        </label>
                    </div>




                    <div className={`all_metting ${activeTab === 'scheduling' ? 'active' : ''}`}
                        onClick={() => handleTabClick('scheduling')} >


                        <label className="wind_alm windo_tow">

                            <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                            <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp sắp diễn ra</p>
                            <input type="radio" name="number_meet" value="1"></input>
                        </label>
                    </div>



                    <div className={`all_metting ${activeTab === 'createdByMe' ? 'active' : ''}`}
                        onClick={() => handleTabClick('createdByMe')} >
                        <label className="wind_alm windo_three">
                            <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                            <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp tạo bởi tôi</p>
                            <input type="radio" name="number_meet" value="1"></input>
                        </label>
                    </div>




                    <div className={`all_metting ${activeTab === 'cancelled' ? 'active' : ''}`}
                        onClick={() => handleTabClick('cancelled')} >
                        <label className="wind_alm windo_four">

                            <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                            <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp bị hủy</p>
                            <input type="radio" name="number_meet" value="1"></input>
                        </label>
                    </div>


                </div>
            </div>
        </div>
    )
}
