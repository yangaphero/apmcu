window.l_welcome = 'OpenMCU-ru';
window.l_status = '状态';

window.l_connections = 'Connections';
window.l_connections_OFFLINE_PREFIX    = "<B>[离线] </B>"   ;
window.l_connections_OFFLINE_SUFFIX    = ""                    ;
window.l_connections_HIDDEN_PREFIX     = "<B>[隐藏] </B>"    ;
window.l_connections_HIDDEN_SUFFIX     = ""                    ;
window.l_connections_AUDIO_OUT_STR     = "音频输出"           ;
window.l_connections_AUDIO_IN_STR      = "音频输入"            ;
window.l_connections_VIDEO_OUT_STR     = "视频输出"           ;
window.l_connections_VIDEO_IN_STR      = "视频输入"            ;
window.l_connections_AI_NEG_ERR        = "无音频输入"      ;
window.l_connections_AO_NEG_ERR        = "无音频输出"     ;
window.l_connections_VI_NEG_ERR        = "无视频输入"      ;
window.l_connections_VO_NEG_ERR        = "无视频输出"     ;
window.l_connections_BUTTON_TEXT       = "获取Text"            ;
window.l_connections_BUTTON_FORUM      = "获取BBCode"          ;
window.l_connections_BUTTON_HTML       = "获取HTML"            ;
window.l_connections_BUTTON_CLOSE      = "Close code"          ;
window.l_connections_CODE_TOOLTIP      = "按Ctrl+C复制";
window.l_connections_DAYS_STR          = "day(s)"              ;
window.l_connections_COL_NAME          = "名称"                ;
window.l_connections_COL_DURATION      = "持续时间"            ;
window.l_connections_COL_RTP           = "RTP通道: 编解码"  ;
window.l_connections_COL_PACKETS       = "封包"             ;
window.l_connections_COL_BYTES         = "字节"               ;
window.l_connections_COL_KBPS          = "速率Kbit/s"              ;
window.l_connections_COL_FPS           = "帧FPS"                 ;
window.l_connections_word_room         = "会议室"                ;
window.l_connections_COL_LOSTPCN       = "60秒内丢失"          ;

window.l_records = '录像';
window.l_control = '控制';
window.l_rooms = '会议室';
window.l_invite = '呼叫';
window.l_invite_s = '呼叫成功';
window.l_invite_f = '呼叫失败';
window.l_settings = '设置';
window.l_param_general = '基础';
window.l_param_registrar = '注册';
window.l_param_conference = '会议';
window.l_param_export = '导出(管道)';
window.l_param_managing_users = '用户';
window.l_param_managing_groups = '用户组';
window.l_param_control_codes = '控制代码';
window.l_param_room_codes = 'Room codes';
window.l_param_h323_endpoints = 'H.323终端';
window.l_param_sip_endpoints = 'SIP终端';
window.l_param_rtsp = 'RTSP参数';
window.l_param_rtsp_servers = 'RTSP服务器';
window.l_param_rtsp_endpoints = 'RTSP终端';
window.l_param_video = '视频';
window.l_param_record = '录像';
window.l_param_h323 = 'H323参数';
window.l_param_sip = 'SIP参数';
window.l_param_sip_proxy = '账号信息';
window.l_param_access_rules = '访问规则';
window.l_param_receive_sound = '音频编码(接收)';
window.l_param_transmit_sound = '音频编码(发送)';
window.l_param_receive_video = '视频编码(接收)';
window.l_param_transmit_video = '视频编码(发送)';
window.l_param_sip_sound = '音频编码';
window.l_param_sip_video = '视频编码';
window.l_help = '帮助';
window.l_forum = '论坛';
window.l_manual = '手册';
window.l_support = '支持';

window.l_info_welcome ='\
<p>\
 openmcu服务正在运行并接受连接.\
</p>\
<p>\
从某个终端连接启动的会议将在非托管模式下工作。所有成员都会看到同样的图片。在非托管模式下，OpenMCU-ru 根据会议成员的数量自动更改布局，依次是文件“ layouts.conf”。连接100个成员后，其他连接成员将不可见，但会看到其他人。非托管模式下的音频流正在从所有连接的成员发送和接收。<br />\
</p>\
<p>\
为了测试服务器，请呼叫“ echo”会议室。或者去“ testroomN”会议室，其中 n 是从1到100的数字。<br />\
</p>\
<p>\
服务器管理是从页面顶部的主菜单执行的。\
在<b>状态</b> 页面显示当前连接和终端参数。<br />\
在<b>控制</b>页面可以设置为托管模式。<br />\
在<b>设置</b>页面可以设置全局服务器参数。<br />\
更多信息可以在帮助中找到(链接指向官方互联网站)。<br />\
</p>\
<p>下面显示了服务器的摘要。</p>\
';
window.l_welcome_logo ='\
<p>\
<b>自定义LOGO图像</b>\
</p>\
<p>\
此图像显示时，没有输入视频在混频器。只接受 BMP，JPEG (最大500kB) ，PNG，GIF。\
</p>\
';

window.l_info_invite ='';
window.l_info_invite_f ='';
window.l_info_invite_s ='';
window.l_info_rooms ='To view room and set it in managed mode - click its name.';

window.l_info_control ='\
<div id=\'tip\' name=\'tip\'\
  onclick=\'if(typeof savedhelpcontent=="undefined"){savedhelpcontent=this.innerHTML;this.innerHTML="This page is used to manage your conference. You can chose participants from the list and place them in desired parts of a screen with layout control feature (drag-and-drop or drop-down boxes). Each position may be assigned to any participant directly (static), or it could be activated by voice.<br>Voice-activated positions could be marked as VAD or VAD2 (most active participants will be automatically moved from VAD to VAD2).";}else {this.innerHTML=savedhelpcontent; try {delete savedhelpcontent;} catch(e){savedhelpcontent=undefined;};}\'\
>This page is used to\
 <span style=\'cursor:pointer;font-weight:bold;color:#095\'> ...</span>\
</div>';

window.l_info_records ='\
显示视频记录目录(在服务器上) ，并允许下载。';

window.l_info_connections ='\
当前页面显示当前连接和终端参数。\
';
window.l_info_param_general ='全局服务器参数。';
window.l_info_param_registrar = '';
window.l_info_param_conference ='';
window.l_info_param_managing_users = '';
window.l_info_param_managing_groups = '';
window.l_info_param_control_codes = '';
window.l_info_param_room_codes = '';
window.l_info_param_video ='传出视频质量.';
window.l_info_param_record ='录像质量.';
window.l_info_param_h323 ='';
window.l_info_param_sip ='';
window.l_info_param_access_rules ='';
window.l_info_param_sip_proxy ='';
window.l_info_param_receive_sound = '';
window.l_info_param_transmit_sound = '';
window.l_info_param_receive_video = '';
window.l_info_param_transmit_video = '';

window.l_select_create =       '创建会议'
window.l_select_enter =        '进入会议'
window.l_select_record =       '录像'
window.l_select_moderated =    '主持人'
window.l_select_moderated_yes ='Yes'
window.l_select_moderated_no = 'No'
window.l_select_visible =      '在线用户'
window.l_select_unvisible =    '离线用户'
window.l_select_duration =     '会议时间'
window.l_select_delete =       '删除会议'

window.l_not_found = '未找到';

window.l_name_accept         = '确定';
window.l_name_reset          = '重置';
window.l_name_user           = '用户';
window.l_name_host           = '主机';
window.l_name_group          = '用户组';
window.l_name_password       = '密码';
window.l_name_roomname       = '会议名称';
window.l_name_access         = '访问';
window.l_name_action         = '动作';
window.l_name_code           = '代码';
window.l_name_message        = '消息';
window.l_name_address        = '地址';
window.l_name_address_book   = '地址薄';
window.l_name_save           = '保存';
window.l_name_cancel         = '取消';
window.l_name_advanced       = '高级';
window.l_name_auto_create              = '自动创建';
window.l_name_force_split_video        = "通过浏览器进行缓存和控制";
window.l_name_auto_delete_empty        = '自动删除';
window.l_name_auto_record_start        = '自动录像';
window.l_name_auto_record_stop         = '自动停止';
window.l_lock_tpl_default              = "默认情况下，模板锁定会议";
window.l_name_recall_last_template     = '调用上一个模板';
window.l_name_time_limit               = '时间限制';

window.l_name_display_name                         = '显示名称修改';
window.l_name_frame_rate_from_mcu                  = 'MCU发送帧速率(FPS)';
window.l_name_bandwidth_from_mcu                   = 'MCU发送码率, Kbit/s';
window.l_name_bandwidth_to_mcu                     = 'MCU接收码率, Kbit/s';
window.l_name_transport                            = '传输';
window.l_name_port                                 = '端口';

window.l_name_registrar                            = 'Registrar';
window.l_name_account                              = '账号';
window.l_name_register                             = '注册';
window.l_name_address_sip_proxy                    = 'SIP代理地址';
window.l_name_expires                              = '到期';
window.l_name_path                                 = '路径';
window.l_name_enable                               = '允许';

window.l_name_registered                           = '已注册';
window.l_name_connected                            = '已连接';
window.l_name_last_ping_response                   = '失去响应';

window.l_name_codec                                = '编码';
window.l_name_audio                                = '音频';
window.l_name_video                                = '视频';
window.l_name_audio_receive                        = '音频(接收)';
window.l_name_audio_transmit                       = '音频(发送)';
window.l_name_video_receive                        = '视频(接收)';
window.l_name_video_transmit                       = '视频(发送)';
window.l_name_audio_codec                          = '音频编码';
window.l_name_video_codec                          = '视频编码';
window.l_name_audio_codec_receive                  = '音频编码(接收)';
window.l_name_video_codec_receive                  = '视频编码(接收)';
window.l_name_audio_codec_transmit                 = '音频编码(发送)';
window.l_name_video_codec_transmit                 = '视频编码(发送)';
window.l_name_video_resolution                     = '视频分辨率';

window.l_name_parameters_for_sending               = "Parameters for sending";
window.l_name_codec_parameters                     = "Codec parameters<br>(override received)";
window.l_name_default_parameters                   = "默认参数";

window.l_room_mute_all                             = '静音所有与会者麦克风';
window.l_room_unmute_all                           = '开启所有与会者麦克风';
window.l_room_invite_all_inactive_members          = '邀请所有非活动成员';
window.l_room_dial_all_members                     = '连续拨号所有成员';
window.l_room_drop_all_active_members              = '删除所有活动连接';
window.l_room_remove_all_inactive_members          = '从列表中删除所有非活动成员';
window.l_room_drop_connection_with                 = '断开连接用';
window.l_room_remove_from_list                     = '从列表中删除';

window.l_room_deletion_text = ["",                   "Closing room &laquo;%&raquo;: disconnecting participants",
                                                     "Closing room &laquo;%&raquo;: waiting for participants get out of room",
                                                     "Closing room &laquo;%&raquo;: disconnecting hidden system members",
                                                     "Closing room &laquo;%&raquo;: waiting for members get out of room",
                                                     "Room &laquo;%&raquo; DELETED"
];

window.l_takecontrol                               = "当前会议工作模式为自动（托管）。单击可自行操作会议（控制）。";
window.l_decontrol                                 = "当前会议工作模式由操作员（即您）管理。单击可停止管理并将会议转换为托管（自动）状态。";
window.l_vadsetup                                  = "语音激励检测（VAD）参数";
window.l_globalmute                                = "不可见成员被取消静音。单击可静音。";
window.l_globalunmute                              = "不可见成员被静音。单击以取消静音。";
window.l_filtermode                                = [
                                                       "目前所选视频缩放最快，质量最差。"
                                                      ,"目前选择的双线性视频缩放，最适合大多数情况。"
                                                      ,"目前选择的视频缩放框过滤器质量好，但缓慢。"
                                                     ];
window.l_videorecorder                             = "开始视频录像";
window.l_videorecorderstop                         = "停止视频录像";
window.l_pleasetakecontrol                         = "无法执行此操作，因为会议正在托管（自动）模式下工作。";
window.l_decontrolmixersconfirm                    = "您正在将会议转换为托管模式..\r\n额外的视频混音器将被移除，只有一个将被保留.\r\n确定要继续吗？";
window.l_templatedeleteconfirm                     = "模板 * 将被删除";
window.l_changelogo                                = "改变: ";

window.l_dir_no_records                            = "当前目录中没有录像。";
window.l_download                                  = "下载";
window.l_delete                                    = "删除";
window.l_totaldrivesize                            = "硬盘空间: * GiB.";
window.l_recordstakesup                            = "录像大小: * GiB (%).";
window.l_freespaceleft                             = "剩余空间:  * GiB (%).";
window.l_recwilldeleted                            = "* 将要被删除!";
window.l_recwilldeleted_ok                         = "[确定]";
window.l_recwilldeleted_cancel                     = "取消";
window.l_recwasdeleted                             = "* 已经被删除";
window.l_filesize                                  = "文件大小";
window.l_resolution                                = "分辨率";
window.l_startdatetime                             = "开始时间";

///
window.l_restore_defaults                          = "恢复默认";
window.l_language                                  = "选择语言";
window.l_server_id                                 = "服务器Id";
window.l_default_protocol_for_outgoing_calls       = "默认呼叫协议";
window.l_http_secure                               = "HTTP安全";
window.l_http_certificate                          = "HTTP证书";
window.l_http_ip                                   = "HTTP IP地址";
window.l_http_port                                 = "HTTP 端口";
window.l_rtp_base_port                             = "RTP基本端口";
window.l_rtp_max_port                              = "RTP最大端口";
window.l_trace_level                               = "调试级别";
window.l_rotate_trace                              = "Rotate trace files at startup";
window.l_log_level                                 = "日志级别";
window.l_call_log_filename                         = "呼叫日志文件名";
window.l_room_control_event_buffer_size            = "会议室控制事件缓冲区大小";
window.l_copy_web_log                              = "复制 web 日志到呼叫日志";
window.l_default_room                              = "默认会议号";
window.l_reject_duplicate_name                     = "拒绝重复的名称";
window.l_allow_loopback_calls                      = "允许环回调用";
window.l_auto_dial_delay                           = "自动拨号延迟(秒)";
///
window.l_allow_internal_calls                      = "允许内部通话";
window.l_sip_allow_reg_without_auth                = "SIP 允许注册而不需要身份验证";
window.l_sip_allow_mcu_calls_without_auth          = "SIP 允许MCU调用而不需要身份验证";
window.l_sip_allow_internal_calls_without_auth     = "SIP 允许无身份验证的内部调用";
window.l_sip_registrar_minimum_expiration          = "SIP 注册商最低到期时间";
window.l_sip_registrar_maximum_expiration          = "SIP 注册商最高期限";
window.l_h323_gatekeeper_enable                    = "H.323 GK启用";
window.l_h323_allow_reg_without_auth               = "H.323 允许注册而不需要认证";
window.l_h323_allow_mcu_calls_without_reg          = "H.323 允许 MCU 无注册地调用";
window.l_h323_allow_internal_calls_without_reg     = "H.323 允许无需注册的内部呼叫";
window.l_h323_allow_duplicate_aliases              = "H.323 允许使用重复的别名";
window.l_h323_gatekeeper_minimum_ttl               = "H.323 GK的最短生存时间";
window.l_h323_gatekeeper_maximum_ttl               = "H.323 GK最大生存时间";
///
window.l_enable_video                              = "启用视频";
window.l_max_bit_rate                              = "最大比特率";
window.l_tx_key_frame_period                       = "发送关键帧周期";
window.l_encoding_threads                          = "编码线程";
window.l_encoding_cpu_used                         = "使用CPU编码";
///
window.l_enable_export                             = "启用导出";
window.l_video_frame_rate                          = "视频帧速率";
window.l_video_inter_packet_delay                  = "视频包间延迟";
window.l_video_frame_width                         = "视频帧宽度";
window.l_video_frame_height                        = "视频帧高度";
window.l_audio_sample_rate                         = "音频采样率";
window.l_audio_channels                            = "音频频道数";
window.l_video_bitrate                             = "视频码率";
window.l_audio_bitrate                             = "音频码率";
///
window.l_listener                                  = "监听";
window.l_interface                                 = "接口";
window.l_nat_router_ip                             = "NAT路由器IP";
window.l_treat_as_global_for_nat                   = "将NAT视为全局的";
window.l_disable_fast_start                        = "禁用快速启动功能";
window.l_disable_h245_tunneling                    = "禁用h.245隧道";
window.l_gk_mode                                   = "网守模式";
window.l_gk_reg_ttl                                = "守门人注册TTL(生存时间)";
window.l_gk_reg_retry_interval                     = "网守请求重试间隔";
window.l_gk_host                                   = "GK端口";
window.l_gk_username                               = "GK账号";
window.l_gk_password                               = "GK密码";
window.l_gk_room_names                             = "GK会议室名称";
///
window.l_server                                    = "服务器";
window.l_server_list                               = "服务器列表";
///
window.l_directory                                 = "号码簿";
window.l_rtp_input_timeout                         = "RTP接收超时";
window.l_received_vfu_delay                        = "限制 VFU, r/s";
window.l_video_cache                               = "视频缓存";
window.l_interval                                  = "间隔";
window.l_internal_call_processing                  = "内部呼叫处理";
window.l_room_auto_create_when_connecting          = "连接时自动创建";
window.l_enter_template_name                       = "输入模板ID";
window.l_disconnect                                = "断开";
window.l_add_to_abook                              = "添加到地址薄";
window.l_accounts                                  = "账号";
///
window.l_param_telserver = 'Telnet服务';
window.l_info_telserver = '';
///
window.l_mute_new_conference_users                 = '静音新成员';
window.l_unmute_new_conference_users               = '开启新成员语音';
