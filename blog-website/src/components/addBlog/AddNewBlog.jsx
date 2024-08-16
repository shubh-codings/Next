'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function AddNewBlog({addNewBlog}) {
    const [openDialog,setOpenDialog] = useState(false)
    const [formData,setFormData] = useState({
        title:'',
        description:''
    })
    const [loading,setLoading]= useState(false);

    const handleSubmit = async()=>{
        setLoading(true)
        try {
            const response = await addNewBlog(formData)
            console.log(response)
            if(response.success){
              setFormData({
                title:'',
                description:''
            });
            setOpenDialog(false);
            }
            setLoading(false)
            
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
  
  return (
    <div className="flex flex-col ">
        <Button variant="outline" onClick={()=>setOpenDialog(true)}>Add Blog</Button>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      {/* <DialogTrigger asChld>
        
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]" >
        <DialogHeader>
          <DialogTitle>Add a new Blog</DialogTitle>
          <DialogDescription>
            Add a new Blog here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e)=>setFormData({...formData, title:e.target.value})}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e)=>setFormData({...formData, description:e.target.value})}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>{loading ? 'Saving Changes':"Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

