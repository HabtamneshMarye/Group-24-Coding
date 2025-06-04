
data class Player(val name: String, val skillLevel: Int) {
    var chatGroup: ChatGroup? = null

    fun joinChatGroup(group: ChatGroup) {
        chatGroup = group
        group.addPlayer(this)
    }
}

class ChatGroup(val skillLevel: Int) {
    private val players = mutableListOf<Player>()

    fun addPlayer(player: Player) {
        if (player.skillLevel == skillLevel) {
            players.add(player)
            println("${player.name} joined the chat group for skill level $skillLevel")
        } else {
            println("${player.name} does not match the skill level of this group.")
        }
    }
}

    fun checkBribery(): String {
    
        val briberyDetected = Random.nextDouble() < 0.1 // 10% chance of detecting bribery
        return if (briberyDetected) "Bribery detected!" else "No bribery detected.”
    }
