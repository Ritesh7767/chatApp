import { prisma } from "../lib/prisma"
import ApiError from "../utils/apiError"
import ApiResponse from "../utils/apiResponse"
import asyncHandler from "../utils/asyncHandler"

export const sendMessage = asyncHandler(async (req, res) => {

    const {receiverUsername, message} = req.body
    const senderId = req.id
    
    const receiver = await prisma.user.findUnique({where: {username: receiverUsername}})
    if(!receiver) throw new ApiError(404, "Receiver not found")

    if(!message || typeof message != "string") throw new ApiError(401, "Invalid type")
    let conversations = await prisma.conversation.findFirst({where: {
        OR: [
                {person1Id: senderId, person2Id: receiver.id}, 
                {person1Id: receiver.id, person2Id: senderId}
            ] 
        }
    })

    if(!conversations){
        conversations = await prisma.conversation.create({
            data: {
                person1Id: senderId,
                person2Id: receiver.id
            }
        })
    }

    const createMessage = await prisma.message.create({
        data: {
            senderId,
            receiverId: receiver.id,
            content: message,
            conversationId: conversations.id
        }
    })
    
    res.status(201).json(new ApiResponse(201, createMessage))
})
    
export const getMessage = asyncHandler(async(req, res) => {
    
    const receiverId = req.query.id as string
    const senderId = req.id.toString()

    if(!receiverId) throw new ApiError(401, "Invalid Request")
    
    console.log(receiverId, senderId)
        
    let conversation = await prisma.conversation.findFirst({
    where: {
        OR: [
                {person1Id: senderId, person2Id: receiverId},
                {person1Id: receiverId, person2Id: senderId}
            ]
        }
    })

    if(!conversation) {
        conversation = await prisma.conversation.create({
            data: {
                person1Id: senderId,
                person2Id: receiverId
            }
        })
    }
    
    let messages = await prisma.message.findMany({
        where: {
            conversationId: conversation.id
        }, orderBy: {
            createdAt: "asc"
        }
    })

    res.status(200).json(new ApiResponse(200, messages, "Messages"))
})

const deleteMessage = asyncHandler(async (req, res) => {
  // todo deletemessage function  
})

