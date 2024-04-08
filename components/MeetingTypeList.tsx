"use client"
import React, {Fragment, useState} from 'react';
import HomeCard from "@/components/HomeCard";
import {useRouter} from "next/navigation";

const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>()
    const router = useRouter();

    return (
        <Fragment>
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New meeting"
                description="Start an instant meeting"
                handleClick={() => {setMeetingState('isJoiningMeeting')}}
                className="bg-orange-1"
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                handleClick={() => {setMeetingState('isScheduleMeeting')}}
                className="bg-blue-1"
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Check out your recordings"
                handleClick={() => {setMeetingState('isJoiningMeeting')}}
                className="bg-purple-1"
            />
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New meeting"
                description="Start an instant meeting"
                handleClick={() => {router.push('/recordings')}}
                className="bg-yellow-1"
            />
        </Fragment>
    );
};

export default MeetingTypeList;