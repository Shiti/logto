const tenants = {
  title: '設置',
  description: '高效管理租戶設置並自訂您的域名。',
  tabs: {
    settings: '設定',
    domains: '網域',
    subscription: '方案與計費',
    billing_history: '帳單記錄',
  },
  settings: {
    title: '設定',
    description: '設置租戶名稱並查看托管數據的地區和環境標籤。',
    tenant_id: '租户ID',
    tenant_name: '租户名称',
    tenant_region: '數據托管區域',
    tenant_region_tip: '您的租戶資源托管在{{region}}。 <a>了解更多</a>',
    environment_tag: '環境標識',
    environment_tag_description: '標籤不會改變服務。它們只是協助您區分不同的環境。',
    environment_tag_development: '開發',
    environment_tag_staging: '預備',
    environment_tag_production: '產品',
    development_description:
      '開發環境主要用於測試，並包括所有專業功能，但登錄體驗中會有浮水印。 <a>了解更多</a>',
    tenant_info_saved: '租戶信息成功保存。',
  },
  full_env_tag: {
    development: '開發',
    production: '生產',
  },
  deletion_card: {
    title: '刪除',
    tenant_deletion: '刪除租戶',
    tenant_deletion_description: '刪除租戶將導致永久刪除所有相關的用戶數據和配置。請謹慎操作。',
    tenant_deletion_button: '刪除租戶',
  },
  create_modal: {
    title: '創建租戶',
    subtitle: '創建新租戶來區分資源及使用者。',
    subtitle_with_region: '創建新租戶以區分資源和使用者。地區和環境標籤在創建後無法修改。',
    tenant_usage_purpose: '您希望使用此租戶做什麼？',
    development_description: '開發環境主要用於測試，不應在生產環境中使用。',
    development_hint: '開發環境主要用於測試，不應在生產環境中使用。',
    production_description: '生產環境用於最終用戶使用軟件，可能需要付費訂閱。',
    available_plan: '可用方案：',
    create_button: '創建租戶',
    tenant_name_placeholder: '我的租戶',
  },
  notification: {
    allow_pro_features_title: '您現在可以在您的開發租戶中訪問<span>所有 Logto Pro 的功能</span>！',
    allow_pro_features_description: '完全免費，無試用期 - 永久使用！',
    explore_all_features: '探索所有功能',
    impact_title: '這對我有影響嗎？',
    staging_env_hint:
      '您的租戶標籤從 "<strong>預備</strong>" 變更為 "<strong>生產</strong>"，但此變更不會影響您當前的設置。',
    paid_tenant_hint_1:
      '當您訂閱 Logto Hobby 計劃時，您之前的"<strong>開發</strong>"租戶標籤將切換為"<strong>生產</strong>"，這不會影響您現有的設置。',
    paid_tenant_hint_2: '如果您仍處於開發階段，可以創建新的開發租戶以訪問更多專業功能。',
    paid_tenant_hint_3:
      '如果您已進入生產階段或處於生產環境，仍需訂閱特定方案，因此您現在無需採取任何措施。',
    paid_tenant_hint_4: '如果您需要幫助，請隨時聯繫我們！感謝您選擇 Logto！',
  },
  delete_modal: {
    title: '刪除租戶',
    description_line1:
      '您確定要刪除標有環境標識"<span>{{tag}}</span>"的"<span>{{name}}</span>"租戶嗎？此操作無法撤銷，並會永久刪除您的所有數據和帳戶信息。',
    description_line2:
      '在刪除帳戶之前，也許我們可以為您提供幫助。<span><a>通過電子郵件與我們聯繫</a></span>',
    description_line3: '如果您確定要繼續，請輸入租戶名稱"<span>{{name}}</span>"以進行確認。',
    delete_button: '永久刪除',
    cannot_delete_title: '無法刪除此租戶',
    cannot_delete_description:
      '抱歉，您現在無法刪除此租戶。請確保您處於免費計劃並已支付所有未結賬單。',
  },
  tenant_landing_page: {
    title: '您尚未建立租戶',
    description:
      '要開始使用 Logto 配置您的項目，請創建一個新的租戶。如果您需要退出或刪除您的帳戶，只需單擊右上角的頭像按鈕。',
    create_tenant_button: '創建租戶',
  },
  status: {
    mau_exceeded: '超出 MAU 限制',
    suspended: '已暫停',
    overdue: '逾期未付款',
  },
  tenant_suspended_page: {
    title: '租戶已暫停。請聯繫我們恢復訪問。',
    description_1:
      '很遺憾地通知您，由於不當使用（包括超出 MAU 限制、逾期付款或其他未經授權的操作等），您的租戶帳戶已被暫時停用。',
    description_2:
      '如果您需要進一步了解，有任何疑慮或希望恢復完整功能並解鎖您的租戶，請立即與我們聯繫。',
  },
  signing_keys: {
    title: '簽署金鑰',
    description: '在您的租戶中安全地管理簽署金鑰。',
    type: {
      private_key: 'OIDC私密金鑰',
      cookie_key: 'OIDC Cookie金鑰',
    },
    private_keys_in_use: '正在使用的私密金鑰',
    cookie_keys_in_use: '正在使用的 Cookie 金鑰',
    rotate_private_keys: '旋轉私密金鑰',
    rotate_cookie_keys: '旋轉 Cookie 金鑰',
    rotate_private_keys_description:
      '此操作將創建一個新的私密簽署金鑰，旋轉當前金鑰並刪除以前的金鑰。您的使用當前金鑰簽署的 JWT 標記將保持有效，直到刪除或再次旋轉。',
    rotate_cookie_keys_description:
      '此操作將創建一個新的 cookie 金鑰，旋轉當前金鑰並刪除以前的金鑰。使用當前金鑰簽署的 cookie 將保持有效，直到刪除或再次旋轉。',
    select_private_key_algorithm: '選擇新私密金鑰的簽署算法',
    rotate_button: '旋轉',
    table_column: {
      id: 'ID',
      status: '狀態',
      algorithm: '簽署金鑰算法',
    },
    status: {
      current: '當前',
      previous: '之前',
    },
    reminder: {
      rotate_private_key:
        '您確定要旋轉<strong>OIDC私密金鑰</strong>嗎？使用新金鑰發放的 JWT 標記將由新金鑰簽署。使用當前金鑰簽署的 JWT 標記將保持有效，直到您再次旋轉。',
      rotate_cookie_key:
        '您確定要旋轉<strong>OIDC Cookie金鑰</strong>嗎？在登錄會話中生成的新 cookie 將由新cookie金鑰簽署。使用當前金鑰簽署的 cookie 將保持有效，直到您再次旋轉。',
      delete_private_key:
        '您確定要刪除<strong>OIDC私密金鑰</strong>嗎？使用此私密簽署金鑰簽署的現有 JWT 標記將不再有效。',
      delete_cookie_key:
        '您確定要刪除<strong>OIDC Cookie金鑰</strong>嗎？使用此 cookie 金鑰簽署的較舊的登錄會話中的 cookie 不再有效，這些用戶需要重新驗證。',
    },
    messages: {
      rotate_key_success: '簽署金鑰成功旋轉。',
      delete_key_success: '金鑰成功刪除。',
    },
  },
};

export default Object.freeze(tenants);
