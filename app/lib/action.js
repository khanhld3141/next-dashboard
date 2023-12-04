import { connectToDb } from './ulti'
import User from '../model/User'
import Product from '../model/Product'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
export const addUser = async (formData) => {
    "use server"
    const { name, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        await connectToDb();
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            phone,
            address,
            isAdmin,
            isActive
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const deleteUser = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData)
    try {
        await connectToDb();
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const updateUser = async (formData) => {
    "use server"
    const { id, name, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)
    const updateField = {
        id, name, email, password, phone, address, isAdmin, isActive
    }
    Object.keys(updateField).forEach(key => (updateField[key] === "" || undefined) && delete updateField[key])

    try {
        await connectToDb();
        await User.findByIdAndUpdate(id, updateField)
    } catch (error) {
        console.log(error);
    }
    revalidatePath(`/dashboard/users`)
    redirect(`/dashboard/users`)
}

export const addProduct = async (formData) => {
    "use server"
    const { title, cate, price, stock, color, size, desc } = Object.fromEntries(formData)
    try {
        await connectToDb();
        const newProduct = new Product({
            title, cate, price, stock, color, size, desc
        })
        await newProduct.save()
    } catch (error) {
        console.log(error);
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData)
    try {
        await connectToDb();
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}
export const updateProduct = async (formData) => {
    "use server"
    const { id, title, cate, price, stock, color, size, desc } = Object.fromEntries(formData)
    const updateField = {
        id, title, cate, price, stock, color, size, desc
    }
    Object.keys(updateField).forEach(key => (updateField[key] === "" || undefined) && delete updateField[key])

    try {
        await connectToDb();
        await Product.findByIdAndUpdate(id, updateField)
    } catch (error) {
        console.log(error);
    }
    revalidatePath(`/dashboard/products`)
    redirect(`/dashboard/products`)
}