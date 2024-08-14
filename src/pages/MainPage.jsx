import { MapFragment } from "../components/Fragments/Map/MapFragment";
import MenuFragment from "../components/Fragments/Menu/MenuFragment";

export const MainPage = () => {
    return (
        <div className="relative">
            <MapFragment />
            <MenuFragment />
        </div>
    );
}
