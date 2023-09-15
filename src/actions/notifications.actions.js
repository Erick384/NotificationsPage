const apiDomain = "http://localhost:3000/notifications"
export const getNotifications = async()=>{
    const response = await fetch(apiDomain)
    const notifications = await response.json()
    return notifications
}