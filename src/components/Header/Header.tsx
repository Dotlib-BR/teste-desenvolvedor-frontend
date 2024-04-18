import headerStyle from './HeaderStyle.module.scss'

export const Header = () => {
	return (
		<div className={headerStyle.header}>
			<a href='/'>
				Bem vindo ao bulário eletrônico
			</a>
		</div>
	)
}
