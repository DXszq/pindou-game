// 游戏配置
const config = {
    colors: [
        // A 黄橙色系
        { name: 'A1', color: '#FFF8E1', category: 'A' }, // 奶黄
        { name: 'A2', color: '#FFECB3', category: 'A' }, // 米黄
        { name: 'A3', color: '#FFF176', category: 'A' }, // 浅柠檬黄
        { name: 'A4', color: '#FFEE58', category: 'A' }, // 嫩黄
        { name: 'A5', color: '#FFD54F', category: 'A' }, // 正黄
        { name: 'A6', color: '#FFB74D', category: 'A' }, // 浅橙黄
        { name: 'A7', color: '#FF9800', category: 'A' }, // 暖橙
        { name: 'A8', color: '#FFC107', category: 'A' }, // 金黄
        { name: 'A9', color: '#FF8A65', category: 'A' }, // 南瓜橙
        { name: 'A10', color: '#FF7043', category: 'A' }, // 深橙
        { name: 'A11', color: '#FFE0B2', category: 'A' }, // 浅杏色
        { name: 'A12', color: '#FFCC80', category: 'A' }, // 蜜桃橙
        { name: 'A13', color: '#FFB74D', category: 'A' }, // 暖橘
        { name: 'A14', color: '#FF6F00', category: 'A' }, // 亮红橙
        { name: 'A15', color: '#FFEE58', category: 'A' }, // 浅鹅黄
        { name: 'A16', color: '#FFF8E1', category: 'A' }, // 浅奶黄
        { name: 'A17', color: '#D7CCC8', category: 'A' }, // 浅土黄
        { name: 'A18', color: '#FFCC80', category: 'A' }, // 浅橘
        { name: 'A19', color: '#FF8A65', category: 'A' }, // 西瓜橙
        { name: 'A20', color: '#FFB74D', category: 'A' }, // 浅黄橙
        { name: 'A21', color: '#FFF8E1', category: 'A' }, // 浅米黄
        { name: 'A22', color: '#FFF59D', category: 'A' }, // 浅柠黄
        { name: 'A23', color: '#FFE0B2', category: 'A' }, // 裸杏色
        { name: 'A24', color: '#FFF8E1', category: 'A' }, // 浅奶黄
        { name: 'A25', color: '#FFCC80', category: 'A' }, // 浅橘黄
        { name: 'A26', color: '#FFA726', category: 'A' }, // 深金黄
        
        // B 绿色系
        { name: 'B1', color: '#E8F5E8', category: 'B' }, // 浅柠绿
        { name: 'B2', color: '#C8E6C9', category: 'B' }, // 亮草绿
        { name: 'B3', color: '#A5D6A7', category: 'B' }, // 嫩草绿
        { name: 'B4', color: '#C5E1A5', category: 'B' }, // 浅草绿
        { name: 'B5', color: '#8BC34A', category: 'B' }, // 正绿
        { name: 'B6', color: '#81C784', category: 'B' }, // 薄荷绿
        { name: 'B7', color: '#4CAF50', category: 'B' }, // 青柠绿
        { name: 'B8', color: '#388E3C', category: 'B' }, // 深绿
        { name: 'B9', color: '#2E7D32', category: 'B' }, // 墨绿
        { name: 'B10', color: '#B0BEC5', category: 'B' }, // 浅灰绿
        { name: 'B11', color: '#558B2F', category: 'B' }, // 橄榄绿
        { name: 'B12', color: '#33691E', category: 'B' }, // 深橄榄绿
        { name: 'B13', color: '#DCE775', category: 'B' }, // 浅黄绿
        { name: 'B14', color: '#E6EE9C', category: 'B' }, // 嫩黄绿
        { name: 'B15', color: '#1B5E20', category: 'B' }, // 深军绿
        { name: 'B16', color: '#9CCC65', category: 'B' }, // 浅豆绿
        { name: 'B17', color: '#689F38', category: 'B' }, // 中橄榄绿
        { name: 'B18', color: '#FFF9C4', category: 'B' }, // 浅柠黄
        { name: 'B19', color: '#4DB6AC', category: 'B' }, // 湖绿
        { name: 'B20', color: '#B0BEC5', category: 'B' }, // 浅灰绿
        { name: 'B21', color: '#1B5E20', category: 'B' }, // 深墨绿
        { name: 'B22', color: '#006400', category: 'B' }, // 黑绿
        { name: 'B23', color: '#2E7D32', category: 'B' }, // 深褐绿
        { name: 'B24', color: '#FFF9C4', category: 'B' }, // 浅柠黄
        { name: 'B25', color: '#4CAF50', category: 'B' }, // 军绿
        { name: 'B26', color: '#33691E', category: 'B' }, // 深棕绿
        { name: 'B27', color: '#B0BEC5', category: 'B' }, // 浅灰绿
        { name: 'B28', color: '#B2DFDB', category: 'B' }, // 薄荷浅绿
        { name: 'B29', color: '#DCE775', category: 'B' }, // 浅黄绿
        { name: 'B30', color: '#FFF9C4', category: 'B' }, // 浅柠黄
        { name: 'B31', color: '#C5E1A5', category: 'B' }, // 浅草绿
        { name: 'B32', color: '#33691E', category: 'B' }, // 深橄榄绿
        
        // C 蓝色系
        { name: 'C1', color: '#F0F8FF', category: 'C' }, // 冰白蓝
        { name: 'C2', color: '#E1F5FE', category: 'C' }, // 浅冰蓝
        { name: 'C3', color: '#B3E5FC', category: 'C' }, // 婴儿蓝
        { name: 'C4', color: '#81D4FA', category: 'C' }, // 天蓝
        { name: 'C5', color: '#4FC3F7', category: 'C' }, // 湖蓝
        { name: 'C6', color: '#29B6F6', category: 'C' }, // 浅宝蓝
        { name: 'C7', color: '#03A9F4', category: 'C' }, // 中宝蓝
        { name: 'C8', color: '#0288D1', category: 'C' }, // 藏青蓝
        { name: 'C9', color: '#01579B', category: 'C' }, // 深蓝
        { name: 'C10', color: '#B3E5FC', category: 'C' }, // 浅青蓝
        { name: 'C11', color: '#4FC3F7', category: 'C' }, // 青蓝
        { name: 'C12', color: '#1A237E', category: 'C' }, // 黑蓝
        { name: 'C13', color: '#9575CD', category: 'C' }, // 雾蓝
        { name: 'C14', color: '#E1F5FE', category: 'C' }, // 浅冰蓝
        { name: 'C15', color: '#64B5F6', category: 'C' }, // 湖青蓝
        { name: 'C16', color: '#455A64', category: 'C' }, // 中藏青
        { name: 'C17', color: '#1E88E5', category: 'C' }, // 亮湖蓝
        { name: 'C18', color: '#0D47A1', category: 'C' }, // 深黑蓝
        { name: 'C19', color: '#0277BD', category: 'C' }, // 深湖蓝
        { name: 'C20', color: '#01579B', category: 'C' }, // 深蓝
        { name: 'C21', color: '#607D8B', category: 'C' }, // 灰蓝
        { name: 'C22', color: '#B3E5FC', category: 'C' }, // 浅青蓝
        { name: 'C23', color: '#9575CD', category: 'C' }, // 雾蓝
        { name: 'C24', color: '#81D4FA', category: 'C' }, // 浅天蓝
        { name: 'C25', color: '#4FC3F7', category: 'C' }, // 浅湖蓝
        { name: 'C26', color: '#4FC3F7', category: 'C' }, // 湖蓝
        { name: 'C27', color: '#9575CD', category: 'C' }, // 雾蓝
        { name: 'C28', color: '#607D8B', category: 'C' }, // 灰蓝
        { name: 'C29', color: '#263238', category: 'C' }, // 藏青
        
        // D 紫色系
        { name: 'D1', color: '#EDE7F6', category: 'D' }, // 浅香芋紫
        { name: 'D2', color: '#E1BEE7', category: 'D' }, // 奶紫
        { name: 'D3', color: '#CE93D8', category: 'D' }, // 薰衣草紫
        { name: 'D4', color: '#5E35B1', category: 'D' }, // 藏青紫
        { name: 'D5', color: '#AB47BC', category: 'D' }, // 亮紫
        { name: 'D6', color: '#8E24AA', category: 'D' }, // 中紫
        { name: 'D7', color: '#7B1FA2', category: 'D' }, // 深紫
        { name: 'D8', color: '#F8BBD0', category: 'D' }, // 浅粉紫
        { name: 'D9', color: '#F3E5F5', category: 'D' }, // 淡紫
        { name: 'D10', color: '#4A148C', category: 'D' }, // 黑紫
        { name: 'D11', color: '#B39DDB', category: 'D' }, // 灰紫
        { name: 'D12', color: '#F8BBD0', category: 'D' }, // 浅粉紫
        { name: 'D13', color: '#F06292', category: 'D' }, // 亮玫紫
        { name: 'D14', color: '#9C27B0', category: 'D' }, // 中紫
        { name: 'D15', color: '#512DA8', category: 'D' }, // 藏青紫
        { name: 'D16', color: '#D1C4E9', category: 'D' }, // 浅紫灰
        { name: 'D17', color: '#B39DDB', category: 'D' }, // 雾紫
        { name: 'D18', color: '#4527A0', category: 'D' }, // 深紫灰
        { name: 'D19', color: '#E1BEE7', category: 'D' }, // 淡紫灰
        { name: 'D20', color: '#E91E63', category: 'D' }, // 艳紫
        { name: 'D21', color: '#6A1B9A', category: 'D' }, // 深紫
        { name: 'D22', color: '#673AB7', category: 'D' }, // 蓝紫
        { name: 'D23', color: '#D1C4E9', category: 'D' }, // 浅紫灰
        { name: 'D24', color: '#5E35B1', category: 'D' }, // 蓝紫
        { name: 'D25', color: '#311B92', category: 'D' }, // 藏青紫
        { name: 'D26', color: '#1A237E', category: 'D' }, // 深紫灰
        
        // E 粉色系
        { name: 'E1', color: '#FAFAFA', category: 'E' }, // 奶白粉
        { name: 'E2', color: '#FFF0F5', category: 'E' }, // 樱花粉
        { name: 'E3', color: '#FFE4E1', category: 'E' }, // 蜜桃粉
        { name: 'E4', color: '#F48FB1', category: 'E' }, // 玫瑰粉
        { name: 'E5', color: '#FF69B4', category: 'E' }, // 亮粉
        { name: 'E6', color: '#F50057', category: 'E' }, // 深粉
        { name: 'E7', color: '#C2185B', category: 'E' }, // 浆果粉
        { name: 'E8', color: '#FFB6C1', category: 'E' }, // 浅豆沙粉
        { name: 'E9', color: '#BA68C8', category: 'E' }, // 中粉紫
        { name: 'E10', color: '#AD1457', category: 'E' }, // 深玫粉
        { name: 'E11', color: '#F8BBD0', category: 'E' }, // 裸粉
        { name: 'E12', color: '#FFB6C1', category: 'E' }, // 浅豆沙粉
        { name: 'E13', color: '#FF1493', category: 'E' }, // 亮玫红
        { name: 'E14', color: '#FFDAB9', category: 'E' }, // 浅肤色粉
        { name: 'E15', color: '#FFA07A', category: 'E' }, // 浅肉粉
        { name: 'E16', color: '#FFFAFA', category: 'E' }, // 奶白
        { name: 'E17', color: '#FFD1DC', category: 'E' }, // 浅裸粉
        { name: 'E18', color: '#FFE4E1', category: 'E' }, // 浅粉
        { name: 'E19', color: '#FFB6C1', category: 'E' }, // 浅豆沙粉
        { name: 'E20', color: '#D8BFD8', category: 'E' }, // 灰粉
        { name: 'E21', color: '#BC8F8F', category: 'E' }, // 灰豆沙
        { name: 'E22', color: '#8B4513', category: 'E' }, // 深豆沙
        { name: 'E23', color: '#DB7093', category: 'E' }, // 复古粉
        { name: 'E24', color: '#DDA0DD', category: 'E' }, // 淡紫灰粉
        
        // F 红色系
        { name: 'F1', color: '#FFA07A', category: 'F' }, // 浅橘红
        { name: 'F2', color: '#F08080', category: 'F' }, // 西瓜红
        { name: 'F3', color: '#FF6347', category: 'F' }, // 亮橙红
        { name: 'F4', color: '#DC143C', category: 'F' }, // 樱桃红
        { name: 'F5', color: '#FF0000', category: 'F' }, // 正红
        { name: 'F6', color: '#722F37', category: 'F' }, // 酒红棕
        { name: 'F7', color: '#B22222', category: 'F' }, // 酒红
        { name: 'F8', color: '#8B0000', category: 'F' }, // 深红
        { name: 'F9', color: '#CD5C5C', category: 'F' }, // 豆沙红
        { name: 'F10', color: '#8B4513', category: 'F' }, // 深棕红
        { name: 'F11', color: '#4A0000', category: 'F' }, // 黑红
        { name: 'F12', color: '#FF7F50', category: 'F' }, // 珊瑚红
        { name: 'F13', color: '#FF4500', category: 'F' }, // 橙红
        { name: 'F14', color: '#FFDAB9', category: 'F' }, // 浅粉橘
        { name: 'F15', color: '#FF2400', category: 'F' }, // 亮红
        { name: 'F16', color: '#FFE4C4', category: 'F' }, // 浅肤色橙
        { name: 'F17', color: '#FFE4E1', category: 'F' }, // 浅肤色红
        { name: 'F18', color: '#E97451', category: 'F' }, // 橘棕
        { name: 'F19', color: '#CD5C5C', category: 'F' }, // 豆沙红
        { name: 'F20', color: '#BC8F8F', category: 'F' }, // 灰豆沙红
        { name: 'F21', color: '#FFF0F5', category: 'F' }, // 浅粉
        { name: 'F22', color: '#FFA07A', category: 'F' }, // 浅橘红
        { name: 'F23', color: '#CD5C5C', category: 'F' }, // 豆沙红
        { name: 'F24', color: '#DB7093', category: 'F' }, // 粉紫红
        { name: 'F25', color: '#FF69B4', category: 'F' }, // 深粉橘红
        
        // G 棕色系
        { name: 'G1', color: '#C4A67C', category: 'G' }, // 米咖
        { name: 'G2', color: '#DEB887', category: 'G' }, // 浅肤色棕
        { name: 'G3', color: '#D2B48C', category: 'G' }, // 奶茶色
        { name: 'G4', color: '#F5DEB3', category: 'G' }, // 浅卡其
        { name: 'G5', color: '#EEE8AA', category: 'G' }, // 浅土黄
        { name: 'G6', color: '#B8860B', category: 'G' }, // 深金黄棕
        { name: 'G7', color: '#A0522D', category: 'G' }, // 中咖
        { name: 'G8', color: '#8B4513', category: 'G' }, // 深咖
        { name: 'G9', color: '#D2B48C', category: 'G' }, // 浅棕
        { name: 'G10', color: '#CD853F', category: 'G' }, // 暖棕
        { name: 'G11', color: '#F5DEB3', category: 'G' }, // 浅卡其黄
        { name: 'G12', color: '#DEB887', category: 'G' }, // 浅橙棕
        { name: 'G13', color: '#A0522D', category: 'G' }, // 中棕
        { name: 'G14', color: '#8B4513', category: 'G' }, // 深棕
        { name: 'G15', color: '#FFFACD', category: 'G' }, // 米白
        { name: 'G16', color: '#DEB887', category: 'G' }, // 浅肤色棕
        { name: 'G17', color: '#6B4423', category: 'G' }, // 深咖棕
        { name: 'G18', color: '#D2B48C', category: 'G' }, // 米白棕
        { name: 'G19', color: '#E97451', category: 'G' }, // 橘棕
        { name: 'G20', color: '#8B4513', category: 'G' }, // 红棕
        { name: 'G21', color: '#5C3317', category: 'G' }, // 深棕
        
        // H 无彩色系
        { name: 'H1', color: '#FAFAFA', category: 'H' }, // 米白
        { name: 'H2', color: '#FFFFFF', category: 'H' }, // 纯白
        { name: 'H3', color: '#D3D3D3', category: 'H' }, // 浅灰
        { name: 'H4', color: '#808080', category: 'H' }, // 中灰
        { name: 'H5', color: '#696969', category: 'H' }, // 深灰
        { name: 'H6', color: '#36454F', category: 'H' }, // 炭灰
        { name: 'H7', color: '#000000', category: 'H' }, // 纯黑
        { name: 'H8', color: '#FFE4C4', category: 'H' }, // 浅肤色
        { name: 'H9', color: '#FAFAFA', category: 'H' }, // 米白
        { name: 'H10', color: '#D3D3D3', category: 'H' }, // 浅灰
        { name: 'H11', color: '#FFFEF0', category: 'H' }, // 浅米白
        { name: 'H12', color: '#FFFAFA', category: 'H' }, // 奶白
        { name: 'H13', color: '#FFFEF0', category: 'H' }, // 米黄白
        { name: 'H14', color: '#B4D4B4', category: 'H' }, // 浅灰绿
        { name: 'H15', color: '#808080', category: 'H' }, // 中灰
        { name: 'H16', color: '#000000', category: 'H' }, // 纯黑
        { name: 'H17', color: '#FAFAFA', category: 'H' }, // 米白
        { name: 'H18', color: '#FFFAFA', category: 'H' }, // 奶白
        { name: 'H19', color: '#FAFAFA', category: 'H' }, // 米白
        { name: 'H20', color: '#2F4F4F', category: 'H' }, // 深灰绿
        { name: 'H21', color: '#FFFEF0', category: 'H' }, // 米黄白
        { name: 'H22', color: '#D3D3D3', category: 'H' }, // 浅灰
        { name: 'H23', color: '#808080', category: 'H' }, // 中灰
        
        // M 暗色系
        { name: 'M1', color: '#A8C8A8', category: 'M' }, // 浅灰绿
        { name: 'M2', color: '#7A8A7A', category: 'M' }, // 灰绿
        { name: 'M3', color: '#4A5A4A', category: 'M' }, // 深灰绿
        { name: 'M4', color: '#FFFEF0', category: 'M' }, // 浅米黄
        { name: 'M5', color: '#D8C8B0', category: 'M' }, // 浅米棕
        { name: 'M6', color: '#556B2F', category: 'M' }, // 橄榄绿
        { name: 'M7', color: '#7A8A7A', category: 'M' }, // 灰绿
        { name: 'M8', color: '#8B7B8B', category: 'M' }, // 灰紫
        { name: 'M9', color: '#8B7B6B', category: 'M' }, // 灰棕
        { name: 'M10', color: '#C8B8C8', category: 'M' }, // 浅灰紫
        { name: 'M11', color: '#8B7B8B', category: 'M' }, // 灰紫
        { name: 'M12', color: '#4A3A5A', category: 'M' }, // 深灰紫
        { name: 'M13', color: '#CC8850', category: 'M' }, // 橙棕
        { name: 'M14', color: '#8B4513', category: 'M' }, // 红棕
        { name: 'M15', color: '#4A5A4A', category: 'M' }, // 深灰绿
    ],
    boardSizes: [10, 22, 52, 104],
    boardShapes: ['square', 'circle'],
    tools: [
        { id: 'pen1', name: '基础豆笔', description: '普通豆笔，一次放置一个豆子', unlocked: true },
        { id: 'pen2', name: '高级豆笔', description: '高级豆笔，一次放置多个豆子', unlocked: true },
        { id: 'pin1', name: '基础豆针', description: '普通豆针，用于挑取豆子', unlocked: true },
        { id: 'pin2', name: '高级豆针', description: '高级豆针，用于精细操作', unlocked: true }
    ]
};

let gameState = {
    currentPage: 'home',
    boardSize: 22,
    boardShape: 'square',
    currentTool: 'pen1',
    currentColor: 0,
    board: [],
    savedDesigns: [],
    settings: {
        sound: true,
        vibration: true
    }
};

function loadSavedDesigns() {
    const saved = localStorage.getItem('pindouDesigns');
    if (saved) {
        gameState.savedDesigns = JSON.parse(saved);
    }
}

function saveToLocalStorage() {
    localStorage.setItem('pindouDesigns', JSON.stringify(gameState.savedDesigns));
}

function loadSettings() {
    const saved = localStorage.getItem('pindouSettings');
    if (saved) {
        gameState.settings = JSON.parse(saved);
    }
}

function saveSettings() {
    localStorage.setItem('pindouSettings', JSON.stringify(gameState.settings));
}

// 初始化游戏
function initGame() {
    setupEventListeners();
    loadSavedDesigns();
    loadSettings();
}

// 页面切换
function switchPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + 'Page').classList.add('active');
    gameState.currentPage = page;
    
    if (page === 'game') {
        createGameBoard();
    } else if (page === 'collect') {
        loadCollectList();
    } else if (page === 'settings') {
        updateSettingsUI();
    } else if (page === 'result') {
        createResultBoard();
        setupResultActions();
    }
}

// 创建游戏棋盘
function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    gameBoard.className = 'game-board';
    if (gameState.boardShape === 'circle') {
        gameBoard.classList.add('circle');
    }
    
    gameBoard.style.all = 'initial';
    gameBoard.style.display = 'inline-block';
    gameBoard.style.position = 'relative';
    
    const cellSize = Math.min(300 / gameState.boardSize, 20);
    const labelSize = 20;
    
    // 创建缩放控制按钮
    const zoomControls = document.createElement('div');
    zoomControls.style.position = 'absolute';
    zoomControls.style.top = '10px';
    zoomControls.style.right = '10px';
    zoomControls.style.display = 'flex';
    zoomControls.style.flexDirection = 'column';
    zoomControls.style.gap = '5px';
    zoomControls.style.zIndex = '100';
    
    const zoomInButton = document.createElement('button');
    zoomInButton.textContent = '+';
    zoomInButton.style.width = '30px';
    zoomInButton.style.height = '30px';
    zoomInButton.style.border = 'none';
    zoomInButton.style.borderRadius = '5px';
    zoomInButton.style.backgroundColor = '#4CAF50';
    zoomInButton.style.color = 'white';
    zoomInButton.style.fontSize = '18px';
    zoomInButton.style.cursor = 'pointer';
    
    const zoomOutButton = document.createElement('button');
    zoomOutButton.textContent = '-';
    zoomOutButton.style.width = '30px';
    zoomOutButton.style.height = '30px';
    zoomOutButton.style.border = 'none';
    zoomOutButton.style.borderRadius = '5px';
    zoomOutButton.style.backgroundColor = '#4CAF50';
    zoomOutButton.style.color = 'white';
    zoomOutButton.style.fontSize = '18px';
    zoomOutButton.style.cursor = 'pointer';
    
    zoomControls.appendChild(zoomInButton);
    zoomControls.appendChild(zoomOutButton);
    gameBoard.appendChild(zoomControls);
    
    // 创建可缩放和拖动的容器
    const zoomContainer = document.createElement('div');
    zoomContainer.style.transformOrigin = 'center center';
    zoomContainer.style.transition = 'transform 0.2s ease';
    zoomContainer.style.position = 'relative';
    let scale = 1;
    let isDragging = false;
    let startX, startY, offsetX = 0, offsetY = 0;
    
    const boardContainer = document.createElement('div');
    boardContainer.style.display = 'grid';
    boardContainer.style.gridTemplateColumns = ` ${labelSize}px repeat(${gameState.boardSize}, ${cellSize}px) ${labelSize}px`;
    boardContainer.style.gridTemplateRows = ` ${labelSize}px repeat(${gameState.boardSize}, ${cellSize}px) ${labelSize}px`;
    boardContainer.style.gap = '2px';
    boardContainer.style.padding = '10px';
    boardContainer.style.backgroundColor = '#e0e0e0';
    boardContainer.style.borderRadius = '5px';
    boardContainer.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    
    gameState.board = Array(gameState.boardSize).fill().map(() => Array(gameState.boardSize).fill(0));
    
    // 根据拼豆板大小确定标签显示间隔
    let labelInterval = 1;
    if (gameState.boardSize >= 52) {
        labelInterval = 5;
    } else if (gameState.boardSize >= 22) {
        labelInterval = 2;
    }
    
    for (let col = 0; col < gameState.boardSize; col++) {
        // 只显示间隔为labelInterval的列标签
        if ((col + 1) % labelInterval === 0 || col === 0 || col === gameState.boardSize - 1) {
            const colLabel = document.createElement('div');
            colLabel.classList.add('board-label');
            colLabel.style.gridColumn = `${col + 2}`;
            colLabel.style.gridRow = '1';
            colLabel.style.display = 'flex';
            colLabel.style.justifyContent = 'center';
            colLabel.style.alignItems = 'center';
            colLabel.style.fontSize = '12px';
            colLabel.style.fontWeight = 'bold';
            colLabel.style.color = '#333';
            colLabel.style.userSelect = 'none';
            colLabel.textContent = col + 1;
            boardContainer.appendChild(colLabel);
        }
    }
    
    for (let row = 0; row < gameState.boardSize; row++) {
        // 只显示间隔为labelInterval的行标签
        if ((row + 1) % labelInterval === 0 || row === 0 || row === gameState.boardSize - 1) {
            const rowLabelLeft = document.createElement('div');
            rowLabelLeft.classList.add('board-label');
            rowLabelLeft.style.gridColumn = '1';
            rowLabelLeft.style.gridRow = `${row + 2}`;
            rowLabelLeft.style.display = 'flex';
            rowLabelLeft.style.justifyContent = 'center';
            rowLabelLeft.style.alignItems = 'center';
            rowLabelLeft.style.fontSize = '12px';
            rowLabelLeft.style.fontWeight = 'bold';
            rowLabelLeft.style.color = '#333';
            rowLabelLeft.style.userSelect = 'none';
            rowLabelLeft.textContent = row + 1;
            boardContainer.appendChild(rowLabelLeft);
        }
        
        for (let col = 0; col < gameState.boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.gridColumn = `${col + 2}`;
            cell.style.gridRow = `${row + 2}`;
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.borderRadius = '50%';
            cell.style.backgroundColor = 'white';
            cell.style.cursor = 'pointer';
            cell.style.transition = 'all 0.2s ease';
            cell.style.position = 'relative';
            cell.style.zIndex = '1';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if ((col + 1) % 5 === 0 && col < gameState.boardSize - 1) {
                cell.style.borderRight = '2px solid #333';
            }
            if ((row + 1) % 5 === 0 && row < gameState.boardSize - 1) {
                cell.style.borderBottom = '2px solid #333';
            }
            
            cell.addEventListener('click', function(e) {
                e.stopPropagation();
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                if (gameState.board[row][col] !== 0) {
                    removeBean(row, col);
                } else {
                    placeBean(row, col);
                }
            });
            
            boardContainer.appendChild(cell);
        }
        
        // 只显示间隔为labelInterval的行标签
        if ((row + 1) % labelInterval === 0 || row === 0 || row === gameState.boardSize - 1) {
            const rowLabelRight = document.createElement('div');
            rowLabelRight.classList.add('board-label');
            rowLabelRight.style.gridColumn = `${gameState.boardSize + 2}`;
            rowLabelRight.style.gridRow = `${row + 2}`;
            rowLabelRight.style.display = 'flex';
            rowLabelRight.style.justifyContent = 'center';
            rowLabelRight.style.alignItems = 'center';
            rowLabelRight.style.fontSize = '12px';
            rowLabelRight.style.fontWeight = 'bold';
            rowLabelRight.style.color = '#333';
            rowLabelRight.style.userSelect = 'none';
            rowLabelRight.textContent = row + 1;
            boardContainer.appendChild(rowLabelRight);
        }
    }
    
    for (let col = 0; col < gameState.boardSize; col++) {
        // 只显示间隔为labelInterval的列标签
        if ((col + 1) % labelInterval === 0 || col === 0 || col === gameState.boardSize - 1) {
            const colLabel = document.createElement('div');
            colLabel.classList.add('board-label');
            colLabel.style.gridColumn = `${col + 2}`;
            colLabel.style.gridRow = `${gameState.boardSize + 2}`;
            colLabel.style.display = 'flex';
            colLabel.style.justifyContent = 'center';
            colLabel.style.alignItems = 'center';
            colLabel.style.fontSize = '12px';
            colLabel.style.fontWeight = 'bold';
            colLabel.style.color = '#333';
            colLabel.style.userSelect = 'none';
            colLabel.textContent = col + 1;
            boardContainer.appendChild(colLabel);
        }
    }
    
    zoomContainer.appendChild(boardContainer);
    gameBoard.appendChild(zoomContainer);
    
    // 放大功能
    zoomInButton.addEventListener('click', () => {
        if (scale < 2) {
            scale += 0.2;
            updateZoom();
        }
    });
    
    // 缩小功能
    zoomOutButton.addEventListener('click', () => {
        if (scale > 0.5) {
            scale -= 0.2;
            updateZoom();
        }
    });
    
    // 鼠标滚轮缩放
    gameBoard.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0 && scale < 2) {
            // 放大
            scale += 0.1;
            updateZoom();
        } else if (e.deltaY > 0 && scale > 0.5) {
            // 缩小
            scale -= 0.1;
            updateZoom();
        }
    });
    
    // 拖动功能
    gameBoard.addEventListener('mousedown', (e) => {
        if (e.target === gameBoard || e.target === zoomContainer) {
            isDragging = true;
            startX = e.clientX - offsetX;
            startY = e.clientY - offsetY;
            gameBoard.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            offsetX = e.clientX - startX;
            offsetY = e.clientY - startY;
            updateZoom();
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        gameBoard.style.cursor = 'grab';
    });
    
    // 触摸拖动支持
    gameBoard.addEventListener('touchstart', (e) => {
        if (e.target === gameBoard || e.target === zoomContainer) {
            isDragging = true;
            startX = e.touches[0].clientX - offsetX;
            startY = e.touches[0].clientY - offsetY;
        }
    });
    
    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            offsetX = e.touches[0].clientX - startX;
            offsetY = e.touches[0].clientY - startY;
            updateZoom();
        }
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    function updateZoom() {
        zoomContainer.style.transform = `scale(${scale}) translate(${offsetX / scale}px, ${offsetY / scale}px)`;
    }
    
    // 初始设置
    gameBoard.style.cursor = 'grab';
}

// 创建颜色选择器
function createColorPicker() {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.innerHTML = '';
    
    const searchTerm = document.getElementById('colorSearchInput').value.toLowerCase();
    const category = document.getElementById('colorCategorySelect').value;
    
    config.colors.forEach((color, index) => {
        const matchesSearch = color.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || color.category === category;
        
        if (matchesSearch && matchesCategory) {
            const colorOption = document.createElement('div');
            colorOption.classList.add('color-option');
            colorOption.style.backgroundColor = color.color;
            colorOption.dataset.colorIndex = index;
            colorOption.title = color.name;
            if (index === gameState.currentColor) {
                colorOption.classList.add('selected');
            }
            
            const colorCode = document.createElement('div');
            colorCode.classList.add('color-code');
            colorCode.textContent = color.name.split(' ')[0];
            colorCode.style.fontSize = '10px';
            colorCode.style.color = '#333';
            colorCode.style.textAlign = 'center';
            colorCode.style.marginTop = '2px';
            colorOption.appendChild(colorCode);
            
            colorOption.addEventListener('click', () => {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                colorOption.classList.add('selected');
                gameState.currentColor = index;
            });
            colorPicker.appendChild(colorOption);
        }
    });
}

// 放置豆子
function placeBean(row, col) {
    if (row >= 0 && row < gameState.boardSize && col >= 0 && col < gameState.boardSize) {
        gameState.board[row][col] = gameState.currentColor + 1;
        renderBoard();
        
        if (gameState.settings.vibration) {
            navigator.vibrate?.(50);
        }
    }
}

// 移除豆子
function removeBean(row, col) {
    if (row >= 0 && row < gameState.boardSize && col >= 0 && col < gameState.boardSize) {
        gameState.board[row][col] = 0;
        renderBoard();
        
        if (gameState.settings.vibration) {
            navigator.vibrate?.(50);
        }
    }
}

// 渲染棋盘
function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const colorIndex = gameState.board[row][col];
        
        if (colorIndex === 0) {
            cell.style.backgroundColor = 'white';
            cell.classList.remove('filled');
        } else {
            cell.style.backgroundColor = config.colors[colorIndex - 1].color;
            cell.classList.add('filled');
        }
    });
}

// 清空棋盘
function clearBoard() {
    gameState.board = Array(gameState.boardSize).fill().map(() => Array(gameState.boardSize).fill(0));
    renderBoard();
}

// 保存设计
function saveDesign() {
    const designName = prompt('请输入设计名称：');
    if (designName) {
        const design = {
            name: designName,
            board: JSON.parse(JSON.stringify(gameState.board)),
            boardSize: gameState.boardSize,
            boardShape: gameState.boardShape,
            timestamp: new Date().toISOString(),
            isCollected: false
        };
        gameState.savedDesigns.push(design);
        saveToLocalStorage();
        alert('设计保存成功！');
    }
}

// 加载收藏列表
function loadCollectList() {
    const collectList = document.getElementById('collectList');
    collectList.innerHTML = '';
    
    const collectedDesigns = gameState.savedDesigns.filter(d => d.isCollected);
    
    if (collectedDesigns.length === 0) {
        collectList.innerHTML = '<p class="empty-message">暂无收藏作品</p>';
        return;
    }
    
    collectedDesigns.forEach((design, index) => {
        const designItem = document.createElement('div');
        designItem.classList.add('design-item');
        designItem.style.cursor = 'pointer';
        
        const previewBoard = document.createElement('div');
        previewBoard.classList.add('preview-board');
        previewBoard.style.display = 'grid';
        previewBoard.style.gridTemplateColumns = `repeat(${design.boardSize}, 5px)`;
        previewBoard.style.gridTemplateRows = `repeat(${design.boardSize}, 5px)`;
        previewBoard.style.gap = '0';
        previewBoard.style.backgroundColor = '#e0e0e0';
        previewBoard.style.padding = '5px';
        previewBoard.style.borderRadius = '5px';
        
        for (let row = 0; row < design.boardSize; row++) {
            for (let col = 0; col < design.boardSize; col++) {
                const cell = document.createElement('div');
                cell.style.width = '5px';
                cell.style.height = '5px';
                const colorIndex = design.board[row][col];
                if (colorIndex !== 0) {
                    cell.style.backgroundColor = config.colors[colorIndex - 1].color;
                    cell.style.borderRadius = '50%';
                }
                previewBoard.appendChild(cell);
            }
        }
        
        const designInfo = document.createElement('div');
        designInfo.classList.add('design-info');
        designInfo.innerHTML = `
            <h4>${design.name}</h4>
            <p>大小: ${design.boardSize}×${design.boardSize}</p>
            <p>形状: ${design.boardShape === 'square' ? '方形' : '圆形'}</p>
        `;
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '删除';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            if (confirm('确定要删除这个作品吗？')) {
                const globalIndex = gameState.savedDesigns.findIndex(d => 
                    d.name === design.name && d.timestamp === design.timestamp
                );
                if (globalIndex !== -1) {
                    gameState.savedDesigns.splice(globalIndex, 1);
                    saveToLocalStorage();
                    loadCollectList();
                }
            }
        });
        
        // 添加点击查看大图的事件
        designItem.addEventListener('click', () => {
            showDesignPreview(design);
        });
        
        designItem.appendChild(previewBoard);
        designItem.appendChild(designInfo);
        designItem.appendChild(deleteButton);
        collectList.appendChild(designItem);
    });
}

// 显示设计预览大图
function showDesignPreview(design) {
    // 创建模态窗口
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    // 创建预览容器
    const previewContainer = document.createElement('div');
    previewContainer.style.backgroundColor = 'white';
    previewContainer.style.padding = '20px';
    previewContainer.style.borderRadius = '10px';
    previewContainer.style.maxWidth = '90%';
    previewContainer.style.maxHeight = '90%';
    previewContainer.style.overflow = 'auto';
    
    // 创建标题
    const title = document.createElement('h3');
    title.textContent = design.name;
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    
    // 创建控制按钮容器
    const controlContainer = document.createElement('div');
    controlContainer.style.display = 'flex';
    controlContainer.style.justifyContent = 'center';
    controlContainer.style.flexWrap = 'wrap';
    controlContainer.style.gap = '10px';
    controlContainer.style.marginBottom = '20px';
    
    // 创建放大按钮
    const zoomInButton = document.createElement('button');
    zoomInButton.textContent = '放大';
    zoomInButton.style.padding = '8px 16px';
    zoomInButton.style.border = 'none';
    zoomInButton.style.borderRadius = '5px';
    zoomInButton.style.backgroundColor = '#4CAF50';
    zoomInButton.style.color = 'white';
    zoomInButton.style.fontSize = '14px';
    zoomInButton.style.cursor = 'pointer';
    
    // 创建缩小按钮
    const zoomOutButton = document.createElement('button');
    zoomOutButton.textContent = '缩小';
    zoomOutButton.style.padding = '8px 16px';
    zoomOutButton.style.border = 'none';
    zoomOutButton.style.borderRadius = '5px';
    zoomOutButton.style.backgroundColor = '#4CAF50';
    zoomOutButton.style.color = 'white';
    zoomOutButton.style.fontSize = '14px';
    zoomOutButton.style.cursor = 'pointer';
    
    // 创建翻转按钮
    const flipButton = document.createElement('button');
    flipButton.textContent = '查看背面';
    flipButton.style.padding = '8px 16px';
    flipButton.style.border = 'none';
    flipButton.style.borderRadius = '5px';
    flipButton.style.backgroundColor = '#4CAF50';
    flipButton.style.color = 'white';
    flipButton.style.fontSize = '14px';
    flipButton.style.cursor = 'pointer';
    
    // 创建分享按钮
    const shareButton = document.createElement('button');
    shareButton.textContent = '分享';
    shareButton.style.padding = '8px 16px';
    shareButton.style.border = 'none';
    shareButton.style.borderRadius = '5px';
    shareButton.style.backgroundColor = '#2196F3';
    shareButton.style.color = 'white';
    shareButton.style.fontSize = '14px';
    shareButton.style.cursor = 'pointer';
    
    controlContainer.appendChild(zoomInButton);
    controlContainer.appendChild(zoomOutButton);
    controlContainer.appendChild(flipButton);
    controlContainer.appendChild(shareButton);
    
    // 创建预览板容器
    const boardContainer = document.createElement('div');
    boardContainer.style.display = 'flex';
    boardContainer.style.justifyContent = 'center';
    boardContainer.style.alignItems = 'center';
    boardContainer.style.marginBottom = '20px';
    boardContainer.style.transition = 'transform 0.5s ease';
    
    // 创建预览板
    const previewBoard = document.createElement('div');
    previewBoard.classList.add('preview-board-large');
    let cellSize = Math.min(600 / design.boardSize, 30);
    let scale = 1;
    let isBackSide = false;
    
    function updatePreviewBoard() {
        previewBoard.innerHTML = '';
        previewBoard.style.display = 'grid';
        previewBoard.style.gridTemplateColumns = `repeat(${design.boardSize}, ${cellSize}px)`;
        previewBoard.style.gridTemplateRows = `repeat(${design.boardSize}, ${cellSize}px)`;
        previewBoard.style.gap = '0';
        previewBoard.style.backgroundColor = '#e0e0e0';
        previewBoard.style.padding = '10px';
        previewBoard.style.borderRadius = '5px';
        
        for (let row = 0; row < design.boardSize; row++) {
            for (let col = 0; col < design.boardSize; col++) {
                const cell = document.createElement('div');
                cell.style.width = `${cellSize}px`;
                cell.style.height = `${cellSize}px`;
                const colorIndex = design.board[row][col];
                if (colorIndex !== 0) {
                    // 背面显示与正面相同的颜色
                    cell.style.backgroundColor = config.colors[colorIndex - 1].color;
                    cell.style.borderRadius = '0';
                    // 添加3D效果
                    if (isBackSide) {
                        // 背面效果：稍微暗一点，模拟真实背面
                        cell.style.filter = 'brightness(0.8)';
                        cell.style.transform = 'translateZ(-5px)';
                        cell.style.boxShadow = `inset 0 0 5px rgba(0,0,0,0.3), 0 -3px 10px rgba(0,0,0,0.1)`;
                    } else {
                        cell.style.transform = 'translateZ(5px)';
                        cell.style.boxShadow = `inset 0 0 5px rgba(0,0,0,0.2), 0 3px 10px rgba(0,0,0,0.1)`;
                    }
                }
                previewBoard.appendChild(cell);
            }
        }
    }
    
    updatePreviewBoard();
    boardContainer.appendChild(previewBoard);
    
    // 放大功能
    zoomInButton.addEventListener('click', () => {
        if (scale < 2) {
            scale += 0.2;
            cellSize = Math.min(600 / design.boardSize, 30) * scale;
            updatePreviewBoard();
        }
    });
    
    // 缩小功能
    zoomOutButton.addEventListener('click', () => {
        if (scale > 0.5) {
            scale -= 0.2;
            cellSize = Math.min(600 / design.boardSize, 30) * scale;
            updatePreviewBoard();
        }
    });
    
    // 翻转功能
    flipButton.addEventListener('click', () => {
        isBackSide = !isBackSide;
        flipButton.textContent = isBackSide ? '查看正面' : '查看背面';
        boardContainer.style.transform = isBackSide ? 'rotateY(180deg)' : 'rotateY(0deg)';
        updatePreviewBoard();
    });
    
    // 分享功能
    shareButton.addEventListener('click', () => {
        // 创建canvas来绘制设计图
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const pixelSize = 10;
        canvas.width = design.boardSize * pixelSize;
        canvas.height = design.boardSize * pixelSize;
        
        // 绘制背景
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制每个单元格
        for (let row = 0; row < design.boardSize; row++) {
            for (let col = 0; col < design.boardSize; col++) {
                const colorIndex = design.board[row][col];
                if (colorIndex !== 0) {
                    ctx.fillStyle = config.colors[colorIndex - 1].color;
                    ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
                }
            }
        }
        
        // 获取图片数据
        const imageData = canvas.toDataURL('image/png');
        
        // 转换为blob
        function dataURLtoBlob(dataurl) {
            const arr = dataurl.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        
        const blob = dataURLtoBlob(imageData);
        const file = new File([blob], `pindou_${design.name}_${Date.now()}.png`, { type: 'image/png' });
        
        // 尝试使用Web Share API
        if (navigator.share && navigator.canShare) {
            if (navigator.canShare({ files: [file] })) {
                navigator.share({
                    title: `拼豆作品 - ${design.name}`,
                    text: `我创作了一个 ${design.boardSize}×${design.boardSize} 的拼豆作品「${design.name}」！`,
                    files: [file]
                }).then(() => {
                    console.log('分享成功');
                }).catch(err => {
                    console.log('分享失败:', err);
                    // 如果分享失败，尝试下载
                    downloadImage(blob);
                });
            } else {
                // 不支持分享文件，尝试下载
                downloadImage(blob);
            }
        } else {
            // 不支持分享，下载到本地
            downloadImage(blob);
        }
        
        function downloadImage(blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `pindou_${design.name}_${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert('图片已保存到本地');
        }
    });
    
    // 鼠标滚轮缩放
    boardContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0 && scale < 2) {
            // 放大
            scale += 0.1;
            cellSize = Math.min(600 / design.boardSize, 30) * scale;
            updatePreviewBoard();
        } else if (e.deltaY > 0 && scale > 0.5) {
            // 缩小
            scale -= 0.1;
            cellSize = Math.min(600 / design.boardSize, 30) * scale;
            updatePreviewBoard();
        }
    });
    
    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '关闭';
    closeButton.style.display = 'block';
    closeButton.style.margin = '0 auto';
    closeButton.style.padding = '10px 30px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.backgroundColor = '#4CAF50';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    
    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // 点击模态窗口背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // 组装预览容器
    previewContainer.appendChild(title);
    previewContainer.appendChild(controlContainer);
    previewContainer.appendChild(boardContainer);
    previewContainer.appendChild(closeButton);
    modal.appendChild(previewContainer);
    
    // 添加到页面
    document.body.appendChild(modal);
}

// 设置选项
function updateSettingsUI() {
    document.getElementById('soundCheckbox').checked = gameState.settings.sound;
    document.getElementById('vibrationCheckbox').checked = gameState.settings.vibration;
}

// 开始烫豆
function startIroning() {
    let hasBeans = false;
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            if (gameState.board[row][col] !== 0) {
                hasBeans = true;
                break;
            }
        }
        if (hasBeans) break;
    }
    
    if (!hasBeans) {
        alert('没有豆子可以烫！');
        return;
    }
    
    // 直接保存结果并跳转到结果页面
    saveIroningResult();
    switchPage('result');
}

// 保存烫豆结果
function saveIroningResult() {
    const design = {
        name: `烫豆作品_${new Date().toLocaleString()}`,
        board: JSON.parse(JSON.stringify(gameState.board)),
        boardSize: gameState.boardSize,
        boardShape: gameState.boardShape,
        timestamp: new Date().toISOString(),
        isCollected: false
    };
    gameState.savedDesigns.push(design);
    saveToLocalStorage();
}

// 创建成品展示板
function createResultBoard() {
    const resultBoard = document.getElementById('resultBoard');
    resultBoard.innerHTML = '';
    
    // 设置3D效果容器
    resultBoard.style.transformStyle = 'preserve-3d';
    resultBoard.style.perspective = '1000px';
    resultBoard.style.margin = '20px auto';
    resultBoard.style.padding = '20px';
    resultBoard.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    resultBoard.style.borderRadius = '15px';
    resultBoard.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    
    const cellSize = Math.min(300 / gameState.boardSize, 20);
    resultBoard.style.gridTemplateColumns = `repeat(${gameState.boardSize}, ${cellSize}px)`;
    resultBoard.style.gridTemplateRows = `repeat(${gameState.boardSize}, ${cellSize}px)`;
    resultBoard.style.gap = '0';
    
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            const colorIndex = gameState.board[row][col];
            if (colorIndex !== 0) {
                const color = config.colors[colorIndex - 1].color;
                cell.style.backgroundColor = color;
                cell.classList.add('filled');
                cell.style.borderRadius = '0';
                cell.style.margin = '0';
                cell.style.border = 'none';
                
                // 添加3D效果
                cell.style.transform = 'translateZ(10px)';
                cell.style.boxShadow = `inset 0 0 10px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.1)`;
                cell.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                
                // 添加高光效果模拟豆子融合后的光泽
                cell.style.position = 'relative';
                const highlight = document.createElement('div');
                highlight.style.position = 'absolute';
                highlight.style.top = '0';
                highlight.style.left = '0';
                highlight.style.width = '100%';
                highlight.style.height = '100%';
                highlight.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)';
                highlight.style.borderRadius = '0';
                cell.appendChild(highlight);
            }
            
            resultBoard.appendChild(cell);
        }
    }
    
    // 添加整体3D旋转效果
    resultBoard.style.animation = 'rotate3D 5s ease-in-out infinite alternate';
}

// 设置成品展示页面的操作
function setupResultActions() {
    const backButton = document.getElementById('backFromResultButton');
    const collectButton = document.getElementById('collectResultButton');
    const discardButton = document.getElementById('discardResultButton');
    const shareButton = document.getElementById('shareResultButton');
    
    // 移除之前的事件监听器，避免重复绑定
    const newBackButton = backButton.cloneNode(true);
    backButton.parentNode.replaceChild(newBackButton, backButton);
    
    const newCollectButton = collectButton.cloneNode(true);
    collectButton.parentNode.replaceChild(newCollectButton, collectButton);
    
    const newDiscardButton = discardButton.cloneNode(true);
    discardButton.parentNode.replaceChild(newDiscardButton, discardButton);
    
    const newShareButton = shareButton.cloneNode(true);
    shareButton.parentNode.replaceChild(newShareButton, shareButton);
    
    // 重新绑定事件
    newBackButton.addEventListener('click', () => switchPage('game'));
    
    newShareButton.addEventListener('click', () => {
        if (gameState.savedDesigns.length > 0) {
            const lastDesign = gameState.savedDesigns[gameState.savedDesigns.length - 1];
            shareDesignImage(lastDesign);
        }
    });
    
    newCollectButton.addEventListener('click', () => {
        if (gameState.savedDesigns.length > 0) {
            const lastDesign = gameState.savedDesigns[gameState.savedDesigns.length - 1];
            lastDesign.isCollected = true;
            saveToLocalStorage();
            alert('作品已收藏！');
        }
        switchPage('collect');
    });
    
    newDiscardButton.addEventListener('click', () => {
        if (confirm('确定要遗弃这个作品吗？')) {
            if (gameState.savedDesigns.length > 0) {
                gameState.savedDesigns.pop();
                saveToLocalStorage();
                alert('作品已遗弃！');
            }
            switchPage('game');
        }
    });
}

// 分享设计图片
function shareDesignImage(design) {
    // 创建canvas来绘制设计图
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const pixelSize = 10;
    canvas.width = design.boardSize * pixelSize;
    canvas.height = design.boardSize * pixelSize;
    
    // 绘制背景
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制每个单元格
    for (let row = 0; row < design.boardSize; row++) {
        for (let col = 0; col < design.boardSize; col++) {
            const colorIndex = design.board[row][col];
            if (colorIndex !== 0) {
                ctx.fillStyle = config.colors[colorIndex - 1].color;
                ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
            }
        }
    }
    
    // 获取图片数据
    const imageData = canvas.toDataURL('image/png');
    
    // 转换为blob
    function dataURLtoBlob(dataurl) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    
    const blob = dataURLtoBlob(imageData);
    const file = new File([blob], `pindou_${design.name}_${Date.now()}.png`, { type: 'image/png' });
    
    // 尝试使用Web Share API
    if (navigator.share && navigator.canShare) {
        if (navigator.canShare({ files: [file] })) {
            navigator.share({
                title: `拼豆作品 - ${design.name}`,
                text: `我创作了一个 ${design.boardSize}×${design.boardSize} 的拼豆作品「${design.name}」！`,
                files: [file]
            }).then(() => {
                console.log('分享成功');
            }).catch(err => {
                console.log('分享失败:', err);
                // 如果分享失败，尝试下载
                downloadImage(blob, design);
            });
        } else {
            // 不支持分享文件，尝试下载
            downloadImage(blob, design);
        }
    } else {
        // 不支持分享，下载到本地
        downloadImage(blob, design);
    }
    
    function downloadImage(blob, design) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pindou_${design.name}_${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('图片已保存到本地');
    }
}

// 设置事件监听器
function setupEventListeners() {
    document.getElementById('startButton').addEventListener('click', () => switchPage('boardSelect'));
    document.getElementById('collectButton').addEventListener('click', () => switchPage('collect'));
    document.getElementById('settingsButton').addEventListener('click', () => switchPage('settings'));
    
    document.getElementById('backFromBoardSelectButton').addEventListener('click', () => switchPage('home'));
    document.getElementById('nextToToolSelectButton').addEventListener('click', () => switchPage('game'));
    
    document.getElementById('backButton').addEventListener('click', () => switchPage('home'));
    document.getElementById('backFromCollectButton').addEventListener('click', () => switchPage('home'));
    document.getElementById('backFromSettingsButton').addEventListener('click', () => switchPage('home'));
    
    document.querySelectorAll('.shape-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.shape-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.boardShape = option.dataset.shape;
        });
    });
    
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.boardSize = parseInt(option.dataset.size);
        });
    });
    
    createColorPicker();
    
    const toggleColorPickerButton = document.getElementById('toggleColorPickerButton');
    const colorPicker = document.getElementById('colorPicker');
    
    toggleColorPickerButton.addEventListener('click', () => {
        colorPicker.classList.toggle('collapsed');
        toggleColorPickerButton.classList.toggle('collapsed');
    });
    
    // 搜索和分类事件
    document.getElementById('colorSearchInput').addEventListener('input', createColorPicker);
    document.getElementById('colorCategorySelect').addEventListener('change', createColorPicker);
    
    document.getElementById('clearButton').addEventListener('click', clearBoard);
    document.getElementById('saveButton').addEventListener('click', saveDesign);
    document.getElementById('ironButton').addEventListener('click', startIroning);
    
    document.getElementById('soundCheckbox').addEventListener('change', function() {
        gameState.settings.sound = this.checked;
        saveSettings();
    });
    document.getElementById('vibrationCheckbox').addEventListener('change', function() {
        gameState.settings.vibration = this.checked;
        saveSettings();
    });
    
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.addEventListener('click', handleClick);
}

function handleClick(e) {
    if (e.target.classList.contains('cell')) {
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        if (gameState.board[row][col] !== 0) {
            removeBean(row, col);
        } else {
            placeBean(row, col);
        }
    }
}

// 页面加载完成后初始化游戏
window.addEventListener('load', initGame);