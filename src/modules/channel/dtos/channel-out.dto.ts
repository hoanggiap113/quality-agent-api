export type ChannelOut = {
    id: string;
    name: string;
    type: string;
    status: string;
    sync_status?: string;
    last_sync_at?: Date;
    sync_interval?: string;
    save_media: boolean;
    total_conversations: number;
    app_id?: string;
    createdAt: Date;
}
