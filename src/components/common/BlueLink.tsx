import { Link, Typography } from "@mui/material";

interface BlueLinkProps {
    hrefLink?: string;
    textLink: string;
}

const BlueLink = ({hrefLink = "#", textLink}:BlueLinkProps) => {
    return (
        <Link href={hrefLink} sx={{ textDecoration: 'none'}}>
            <Typography sx={{ fontWeight: '450', fontSize: '14px' }}>
                {textLink}
            </Typography>
        </Link>
    );
}

export default BlueLink;