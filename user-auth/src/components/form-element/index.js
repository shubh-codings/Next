import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

function FormComponent({control,value,onChange}) {
    let content = null
 switch (control.componentType) {
    case 'input':
        content =  <div className='flex flex-col gap-3 w-full'>
            <Label htmlFor={control.name}>{control.label}</Label>
            <Input className='w-full' id={control.name} type={control.type} placeholder={control.placeholder} name={control.name} value={value} onChange={onChange}/>  
        </div>
        break;
  
    default:
        content =  <div className='flex flex-col gap-3 w-full'>
            <Label htmlFor={control.name}>{control.label}</Label>
            <Input className='w-full' id={control.name} type={control.type} placeholder={control.placeholder} name={control.name} value={value} onChange={onChange}/>  
        </div>
        break;
  }

  return content
}

export default FormComponent
