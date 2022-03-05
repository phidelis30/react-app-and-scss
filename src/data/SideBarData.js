import React from 'react';
import { FaUniversity, FaGlobe, FaUsers, FaEnvelope, FaGem } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const sideBarData = [
	{
		name: 'Univesity',
		icon: iconStyle(FaUniversity),
		to: '/university',
	},
	{
		name: 'Public',
		icon: iconStyle(FaGlobe),
		to: '/public',
	},
	{
		name: 'Groups',

		icon: iconStyle(FaUsers),
		to: '/groups',
	},
	{
		name: 'Messaging',
		icon: iconStyle(FaEnvelope),
		to: '/message',
	},
	{
		name: 'Setting',
		icon: iconStyle(FaGem),
		to: '/setting',
	},
];


