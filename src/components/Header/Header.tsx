import headerStyle from './HeaderStyle.module.scss'

export const Header = () => {
	return (
		<header className={headerStyle.header}>
			<a href='/'>
				Bem vindo ao bulário eletrônico
			</a>
		</header>
	)
}
