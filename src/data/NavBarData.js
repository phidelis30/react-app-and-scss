import React from 'react';
import { FaUniversity, FaGlobe, FaUsers, FaEnvelope, FaBell } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const navBarData = [
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
		name: 'Notification',
		icon: iconStyle(FaBell),
		to: '/notifications',
	},
];


