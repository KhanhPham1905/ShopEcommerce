import React from 'react';
import styles from './Body.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { setDatasets } from 'react-chartjs-2/dist/utils';
import Link from 'next/link'
import Boxhome from '@/pages/components/Boxhome/Boxcontent';

ChartJS.register(ArcElement, Tooltip, Legend);


export interface BodyProp {

}




export default function Trangchu({ isHasRole }: { isHasRole: boolean }) {


  return (
    <Boxhome isHasRole={isHasRole} />
  );
}