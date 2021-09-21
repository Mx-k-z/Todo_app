import React from 'react'
import {Button, Stack, TextField} from '@material-ui/core'

const Input = ({title, onChange}) => {
	return (
		<>
			<Stack
				sx={{mt: 0.5, mb: 0.7}}
				direction={'row'}
				alignItems={'baseline'}
				justifyContent={'flex-start'}
			>
				<Button
					color={'secondary'}
					type={'submit'}
					sx={{fontSize: 12, borderRadius: 3, m: 1.5}}
					variant={'contained'}
					size={'small'}
				>
					add
				</Button>
				<TextField
					autoFocus
					color={'secondary'}
					sx={{width: '90%',}}
					id="standard-basic"
					label={'New todo'}
					variant="standard"
					InputLabelProps={{
						style: {fontSize: 20, color: 'white', opacity: '50%'},
					}}
					value={title.title}
					onChange={onChange}
				/>
			</Stack>
		</>
	)
}

export default Input