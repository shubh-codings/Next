"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";

function BlogCards({ blogData, deleteBlog, editBlog }) {
  const [openDialog,setOpenDialog] = useState(false)
  const [blogIdToBeUpdated,setBlogIdToBeUpdated] = useState('')
  const [formData,setFormData] = useState({
    title:'',
    description:''
})
const [loading,setLoading]= useState(false);

  const handleDelete = (id) => {
    try {
      const response = deleteBlog(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async()=>{
    setLoading(true)
        try {
            const response = await editBlog(blogIdToBeUpdated,formData)
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
  const handleEdit = async (data) => {
    // console.log(data, ': data')
    setFormData({title:data.title,description:data.description})
    setBlogIdToBeUpdated(data._id)
    setOpenDialog(true)
  };
  return (
    <div className="p-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      {blogData && blogData.length > 0
        ? blogData.map((blog) => (
            <Card key={blog._id} className="w-[300px] p-2">
              <CardContent className=" flex flex-col justify-center items-center h-full ">
                <h4 className="text-2xl text-gray-900 m-5">{blog.title}</h4>
                <p className="text-sm text-center text-gray-700 ">
                  {blog.description}
                </p>
                <CardFooter className="mt-5 flex justify-between items-center gap-8">
                  <Button
                    onClick={() => {
                      handleEdit(blog);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-600 "
                    onClick={() => {
                      handleDelete(blog._id);
                    }}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          ))
        : null}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        {/* <DialogTrigger asChld>
        
      </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
            <DialogDescription>
              Edit Blog here. Click save when you are done.
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
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSubmit}>
              {loading ? "Saving Changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BlogCards;
