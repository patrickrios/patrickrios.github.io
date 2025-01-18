export const topMenuItems = [{ 
    title:{
      'pt-br': 'serviços', 
      'eng': 'services'
    },
    target: 'services'
},{
    title:{
      'pt-br': 'projetos', 
      'eng': 'projects'
    },
    target: 'projects'
},{
    title:{
      'pt-br': 'experiência', 
      'eng': 'experience'
    },
    target: 'experience'
},{
    title:{
      'pt-br': 'contato', 
      'eng': 'contact'
    },
    target: 'contact'
}];

export const MenuIcon = () =>{
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18C3.71667 18 3.47934 17.904 3.288 17.712C3.09667 17.52 3.00067 17.2827 3 17C2.99934 16.7173 3.09534 16.48 3.288 16.288C3.48067 16.096 3.718 16 4 16H20C20.2833 16 20.521 16.096 20.713 16.288C20.905 16.48 21.0007 16.7173 21 17C20.9993 17.2827 20.9033 17.5203 20.712 17.713C20.5207 17.9057 20.2833 18.0013 20 18H4ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H4ZM4 8C3.71667 8 3.47934 7.904 3.288 7.712C3.09667 7.52 3.00067 7.28267 3 7C2.99934 6.71733 3.09534 6.48 3.288 6.288C3.48067 6.096 3.718 6 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71733 21 7C20.9993 7.28267 20.9033 7.52033 20.712 7.713C20.5207 7.90567 20.2833 8.00133 20 8H4Z" fill="#797C99"/>
    </svg>
)};
interface SeparatorProp{
  styleClass: string;
}
export const MenuSeparator = ({ styleClass }:SeparatorProp) => {
  return(
      <svg className={styleClass} width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3L3 0L6 3L3 6L0 3Z" fill="#323232"/>
      </svg>
)};

interface CloseMenuProp{
  onClose: () => void;
  styleClass: string;
}
export const CloseMenuIcon = ({onClose, styleClass}:CloseMenuProp) =>{
  return(
      <button className={styleClass} onClick={onClose}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="#435057"/>
              <path d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#435057"/>
          </svg>
      </button>
)};