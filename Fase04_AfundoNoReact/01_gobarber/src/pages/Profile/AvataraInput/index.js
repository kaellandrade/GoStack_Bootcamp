import {useEffect, useRef, useState} from "react";
import {useField} from "@rocketseat/unform";
import {useSelector} from "react-redux";
import {Container} from './style';
import api from '../../../services/api';
import {AVATAR_IMG_DEFAULT} from "../../../consts/profile";

function AvatarInput() {
	const {avatar} = useSelector(({user})=>user.profile)
	const {_, registerField} = useField('');

	const [file, setFile] = useState(avatar ? avatar.id : null)
	const [preview, setPreview] = useState(avatar ? avatar.url : AVATAR_IMG_DEFAULT)

	const ref = useRef();

	useEffect(()=> {
		if(ref.current) {
			registerField
			({
				name:'avatar_id',
				ref:ref.current,
				path: 'dataset.file'
			})
		}
	}, [ref, registerField]);

	async function handleChange(e) {
		const data = new FormData();
		data.append('file', e.target.files[0]);

		const response = await api.post('files', data);
		const {id, url} = response.data;

		setFile(id);
		setPreview(url);
	}
	return (
		<Container>
			<label htmlFor="avatar">
				<img src={preview || AVATAR_IMG_DEFAULT} alt=""/>
				<input
					type="file"
					id="avatar"
					accept="image/*"
					data-file={file}
					onChange={handleChange}
					ref={ref}
				/>
			</label>
		</Container>
	);
}

export {AvatarInput};
