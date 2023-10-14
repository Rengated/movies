import React, { ReactNode } from "react"
import '../assets/styles/layout.scss'


interface Props {
    children: ReactNode

}

export const Layout: React.FC<Props> = ({children}) => {
    return <div className="layout">{children}</div>
}