export interface Event {
    id: string;
    title: string;
    date: string;
    image: string;
    ticketLink?: string;
}

export const events: Event[] = [
    {
        id: "e1",
        title: "Winter Glow Night",
        date: "January 24, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/Glow+Party-4e1fbc29.JPEG?Expires=1771176615&Signature=mGlOc-7IiRMGAylFBymXHVyioP2QZd4TTkGhtDr~fcltiZZUqndFx3Du50jH0PzuBVLJgUnNGy0ENvJ~3KKnOjq2-6M3ny0a5z~NKhIlAHoF0hdKDTyf-GgWdEg0WNFWjLPLN94h-tDtgz3lDjL13ij2s0RModTNenFpGdiiZy~I7NAQgu6rPR-PIIRb2kgC4cjb3QL7lyEMUE8W51xtGDvJoJZjNRUrd4kDfrwGsFAHbfX~1uqw3shPp157ejAqJ-kwf3UQdtp64Mp0bRwyz8BEtI8avM27vhvG~ItRXtdYEQIHFXxm1Os9i1Evt1auQAve-~ko-q7DXxc665SQ7Q__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/Glow+Party-4e1fbc29.JPEG?Expires=1771176615&Signature=mGlOc-7IiRMGAylFBymXHVyioP2QZd4TTkGhtDr~fcltiZZUqndFx3Du50jH0PzuBVLJgUnNGy0ENvJ~3KKnOjq2-6M3ny0a5z~NKhIlAHoF0hdKDTyf-GgWdEg0WNFWjLPLN94h-tDtgz3lDjL13ij2s0RModTNenFpGdiiZy~I7NAQgu6rPR-PIIRb2kgC4cjb3QL7lyEMUE8W51xtGDvJoJZjNRUrd4kDfrwGsFAHbfX~1uqw3shPp157ejAqJ-kwf3UQdtp64Mp0bRwyz8BEtI8avM27vhvG~ItRXtdYEQIHFXxm1Os9i1Evt1auQAve-~ko-q7DXxc665SQ7Q__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e2",
        title: "Love & Lights",
        date: "February 14, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/14.02.2026-4f9dffb1.JPG?Expires=1771176615&Signature=KuhVi~MxUCZs-eyVrJWnj0Hd1TuuLvDiz3t8NLut2rIPs9tPtARxX4Cx7tQgCnxT8NHYNkpx1G9TFhNuDyRtuPxaYk9doOfmW3P1QToPEpo02uT5W2gtDmTHLYxQEZpvS1R~umnTrNnWPG4e9k1lCM2TAPc3SuMm~KYySdCmBiU2NK69H3iY3rJZeuOgdK9xOaqxijuPg14OJLa79rLyr6TJdqSbFY0ok3PCjCWN62uht9Fa~FzkedjegLvo-JDAhr-qU9NscXV32J5P~~EYYx~aSPtijTQmqelwFmhJltizA8O4~bORWo1LA0Gpc9D1GP-B2BXfSbNJbFzcA9v28w__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/14.02.2026-4f9dffb1.JPG?Expires=1771176615&Signature=KuhVi~MxUCZs-eyVrJWnj0Hd1TuuLvDiz3t8NLut2rIPs9tPtARxX4Cx7tQgCnxT8NHYNkpx1G9TFhNuDyRtuPxaYk9doOfmW3P1QToPEpo02uT5W2gtDmTHLYxQEZpvS1R~umnTrNnWPG4e9k1lCM2TAPc3SuMm~KYySdCmBiU2NK69H3iY3rJZeuOgdK9xOaqxijuPg14OJLa79rLyr6TJdqSbFY0ok3PCjCWN62uht9Fa~FzkedjegLvo-JDAhr-qU9NscXV32J5P~~EYYx~aSPtijTQmqelwFmhJltizA8O4~bORWo1LA0Gpc9D1GP-B2BXfSbNJbFzcA9v28w__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e3",
        title: "Queens Day (International Women's Day)",
        date: "March 8, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/08.03.2026.JPG?Expires=1771176615&Signature=YzUzaNmeLOIcYUIf75YUnKrgn~7gnQYXekyCO0QEYCH4fHxXLfy0y40-R~EnwKNmr7HaLV7J6Mio8qt0NL8v3Fv0Kr~0I9PBgmHURHyqnXY0~sVuGdKJ0OA7~xeytm-ovagUN0oG-asQNe-BasrqKwU0-qv0kLhOVT3ivLZPyEiZ0me8sL0MfH5ld-~JXaCGWXerAdsT89PQkncP5QcF6sYT-BSFALTcNwdHKMe-B4toz0j~XzxJ1picfyh3VRxoOMQTewmzdMjf6VwkD-kRG55dtGCL4cgiGPj57dfjWDY6X-Mb-9DUpj8ERQHWJibSeBR4mGtZerfFsAa6OmghFQ__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/08.03.2026.JPG?Expires=1771176615&Signature=YzUzaNmeLOIcYUIf75YUnKrgn~7gnQYXekyCO0QEYCH4fHxXLfy0y40-R~EnwKNmr7HaLV7J6Mio8qt0NL8v3Fv0Kr~0I9PBgmHURHyqnXY0~sVuGdKJ0OA7~xeytm-ovagUN0oG-asQNe-BasrqKwU0-qv0kLhOVT3ivLZPyEiZ0me8sL0MfH5ld-~JXaCGWXerAdsT89PQkncP5QcF6sYT-BSFALTcNwdHKMe-B4toz0j~XzxJ1picfyh3VRxoOMQTewmzdMjf6VwkD-kRG55dtGCL4cgiGPj57dfjWDY6X-Mb-9DUpj8ERQHWJibSeBR4mGtZerfFsAa6OmghFQ__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e4",
        title: "White Night",
        date: "June 27, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/White+Night.JPG?Expires=1771176615&Signature=Wtl1xHJahZ2BuYXK3Pw3BLndJFa49ZfO891ej-UunuVash6bXjCg-9ZFjn-as1lHpxrFqYwLqr74CYyJz6Hwd7AhbXvioHQ00nvnBmSjajMb4pTtJUH~8krTH5OyjengC56Z~vX~zjMEQGgkArLAyA6xbp3wnrA5IJSzTTyTlCZ0r0Y389o5sUPFMSexzKbeJafwv-Q4vE8KIS7s5Nffz8XubIbnhM6P0joI9Kv9PNCJwyyPzJQgxnLgWV-Rwl5TUl56zHqxioetXiRC-9joRoBQhPCHYaFXLosZvx4CRbnCx40zVi868P~VBH6Myp5KFe3Db0~SSpxHSt-lxdGu1A__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/White+Night.JPG?Expires=1771176615&Signature=Wtl1xHJahZ2BuYXK3Pw3BLndJFa49ZfO891ej-UunuVash6bXjCg-9ZFjn-as1lHpxrFqYwLqr74CYyJz6Hwd7AhbXvioHQ00nvnBmSjajMb4pTtJUH~8krTH5OyjengC56Z~vX~zjMEQGgkArLAyA6xbp3wnrA5IJSzTTyTlCZ0r0Y389o5sUPFMSexzKbeJafwv-Q4vE8KIS7s5Nffz8XubIbnhM6P0joI9Kv9PNCJwyyPzJQgxnLgWV-Rwl5TUl56zHqxioetXiRC-9joRoBQhPCHYaFXLosZvx4CRbnCx40zVi868P~VBH6Myp5KFe3Db0~SSpxHSt-lxdGu1A__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e5",
        title: "Summer Beach Party",
        date: "August 15, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/15.aug.2026.JPG?Expires=1771176615&Signature=Y38Ur4HuQ~vKmIQc2E6HDhWV00YcUNQR5f4o8UmNkyQCjW0Tk-JovRc7GKxf6cQOhY0TDWVEfa5yMhEJqg7woylOwDpcGlqIVp9fmDyM8MOpLcleQnx5~AmT0U7ZL4WAFoS7FwC9xGfM-bl5VQjFcLio61akY70fhnTpeWNTcryWadxYBNfaycRXiDpGYsD-~7Wkpu-BvJQE9wYcNXyfqDzQWksobA17VdFvBsoW9HPA4nNYf97qtJEwxION9qEXDVgY9brCI15RMnV322s3K2JBeUTD7iSXZJjQV8CllNdM12z2CT08J274zxiATEc~gj1l5cnGPfk9iKyr~-Vpxg__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/15.aug.2026.JPG?Expires=1771176615&Signature=Y38Ur4HuQ~vKmIQc2E6HDhWV00YcUNQR5f4o8UmNkyQCjW0Tk-JovRc7GKxf6cQOhY0TDWVEfa5yMhEJqg7woylOwDpcGlqIVp9fmDyM8MOpLcleQnx5~AmT0U7ZL4WAFoS7FwC9xGfM-bl5VQjFcLio61akY70fhnTpeWNTcryWadxYBNfaycRXiDpGYsD-~7Wkpu-BvJQE9wYcNXyfqDzQWksobA17VdFvBsoW9HPA4nNYf97qtJEwxION9qEXDVgY9brCI15RMnV322s3K2JBeUTD7iSXZJjQV8CllNdM12z2CT08J274zxiATEc~gj1l5cnGPfk9iKyr~-Vpxg__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e6",
        title: "Exclusive Party New",
        date: "September 19, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/19.09.2026.JPG?Expires=1771176615&Signature=rB~ruYTq7W5dOhHxtNM1ggmXZI10bxuhyiEeHA3MF4pIlSiWEH3lvsT2GuIxPFt8pWQxM-mELnfJtAEJPGmnWJicHDvsCQ5MvsnzDpBvaKbug~6fitKDDXVo3NnqKS0LAu~cdl4kMumu2NGUXoOlPLnW8QYi9DcsInuZGbPG3pkUqkEhKLMOii8QEqUUrG7ajxziqYCpZ5R26xHS~~mg-WmlqdO34inmpDrghSYIpDO7d0O7p081JvEANFUUlCB9JFF7ROaq2vXhcOb5yDy4-DHTmhw4vHQ9PauLriTXuyyo6pXvNzF5TOVcTOUelGtnUvOM5XfMrhHXCskPIT1GzQ__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/19.09.2026.JPG?Expires=1771176615&Signature=rB~ruYTq7W5dOhHxtNM1ggmXZI10bxuhyiEeHA3MF4pIlSiWEH3lvsT2GuIxPFt8pWQxM-mELnfJtAEJPGmnWJicHDvsCQ5MvsnzDpBvaKbug~6fitKDDXVo3NnqKS0LAu~cdl4kMumu2NGUXoOlPLnW8QYi9DcsInuZGbPG3pkUqkEhKLMOii8QEqUUrG7ajxziqYCpZ5R26xHS~~mg-WmlqdO34inmpDrghSYIpDO7d0O7p081JvEANFUUlCB9JFF7ROaq2vXhcOb5yDy4-DHTmhw4vHQ9PauLriTXuyyo6pXvNzF5TOVcTOUelGtnUvOM5XfMrhHXCskPIT1GzQ__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e7",
        title: "Arabic Night",
        date: "September 26, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/15.aug.2026.JPG?Expires=1771176615&Signature=Y38Ur4HuQ~vKmIQc2E6HDhWV00YcUNQR5f4o8UmNkyQCjW0Tk-JovRc7GKxf6cQOhY0TDWVEfa5yMhEJqg7woylOwDpcGlqIVp9fmDyM8MOpLcleQnx5~AmT0U7ZL4WAFoS7FwC9xGfM-bl5VQjFcLio61akY70fhnTpeWNTcryWadxYBNfaycRXiDpGYsD-~7Wkpu-BvJQE9wYcNXyfqDzQWksobA17VdFvBsoW9HPA4nNYf97qtJEwxION9qEXDVgY9brCI15RMnV322s3K2JBeUTD7iSXZJjQV8CllNdM12z2CT08J274zxiATEc~gj1l5cnGPfk9iKyr~-Vpxg__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/15.aug.2026.JPG?Expires=1771176615&Signature=Y38Ur4HuQ~vKmIQc2E6HDhWV00YcUNQR5f4o8UmNkyQCjW0Tk-JovRc7GKxf6cQOhY0TDWVEfa5yMhEJqg7woylOwDpcGlqIVp9fmDyM8MOpLcleQnx5~AmT0U7ZL4WAFoS7FwC9xGfM-bl5VQjFcLio61akY70fhnTpeWNTcryWadxYBNfaycRXiDpGYsD-~7Wkpu-BvJQE9wYcNXyfqDzQWksobA17VdFvBsoW9HPA4nNYf97qtJEwxION9qEXDVgY9brCI15RMnV322s3K2JBeUTD7iSXZJjQV8CllNdM12z2CT08J274zxiATEc~gj1l5cnGPfk9iKyr~-Vpxg__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e8",
        title: "Black Red Gold Night",
        date: "October 3, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/3.10.2026.jpg?Expires=1771176615&Signature=EFn6yoKHZRuuYN8YIgbXVJaejPC~rJHeGyDxRg-iCTCjqud7VgUYDwDwbGTLHp5TNogkbeUgJmokGTk1p1SIe~NOxkZNCKVuRQkdAUdZP2LdJx1cz6gkUDB61AHO6EaAOy8cwShwsuoPCIy1tNrwXBU6vEJEv7bUQBjLBJlBsso41ql9asKG7ULc2C7s0I3iOtclrImZEZD1~~mEb1AM7dEcjvpXKhsy8HU1UmB1S22kOhmWjMISg6KCX3aviFoK~ZxRnnaRQrE7OraHDgLg8lIFudq6xSOpTPx0JYWa2MAwNE5tRMZqFJNQiMyzq96RuNY5O-cti~PUTmp0oggKJw__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/3.10.2026.jpg?Expires=1771176615&Signature=EFn6yoKHZRuuYN8YIgbXVJaejPC~rJHeGyDxRg-iCTCjqud7VgUYDwDwbGTLHp5TNogkbeUgJmokGTk1p1SIe~NOxkZNCKVuRQkdAUdZP2LdJx1cz6gkUDB61AHO6EaAOy8cwShwsuoPCIy1tNrwXBU6vEJEv7bUQBjLBJlBsso41ql9asKG7ULc2C7s0I3iOtclrImZEZD1~~mEb1AM7dEcjvpXKhsy8HU1UmB1S22kOhmWjMISg6KCX3aviFoK~ZxRnnaRQrE7OraHDgLg8lIFudq6xSOpTPx0JYWa2MAwNE5tRMZqFJNQiMyzq96RuNY5O-cti~PUTmp0oggKJw__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e9",
        title: "Dark Carnival (Halloween)",
        date: "October 31, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/19.09.2026.JPG?Expires=1771176615&Signature=rB~ruYTq7W5dOhHxtNM1ggmXZI10bxuhyiEeHA3MF4pIlSiWEH3lvsT2GuIxPFt8pWQxM-mELnfJtAEJPGmnWJicHDvsCQ5MvsnzDpBvaKbug~6fitKDDXVo3NnqKS0LAu~cdl4kMumu2NGUXoOlPLnW8QYi9DcsInuZGbPG3pkUqkEhKLMOii8QEqUUrG7ajxziqYCpZ5R26xHS~~mg-WmlqdO34inmpDrghSYIpDO7d0O7p081JvEANFUUlCB9JFF7ROaq2vXhcOb5yDy4-DHTmhw4vHQ9PauLriTXuyyo6pXvNzF5TOVcTOUelGtnUvOM5XfMrhHXCskPIT1GzQ__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/19.09.2026.JPG?Expires=1771176615&Signature=rB~ruYTq7W5dOhHxtNM1ggmXZI10bxuhyiEeHA3MF4pIlSiWEH3lvsT2GuIxPFt8pWQxM-mELnfJtAEJPGmnWJicHDvsCQ5MvsnzDpBvaKbug~6fitKDDXVo3NnqKS0LAu~cdl4kMumu2NGUXoOlPLnW8QYi9DcsInuZGbPG3pkUqkEhKLMOii8QEqUUrG7ajxziqYCpZ5R26xHS~~mg-WmlqdO34inmpDrghSYIpDO7d0O7p081JvEANFUUlCB9JFF7ROaq2vXhcOb5yDy4-DHTmhw4vHQ9PauLriTXuyyo6pXvNzF5TOVcTOUelGtnUvOM5XfMrhHXCskPIT1GzQ__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e10",
        title: "90s Party",
        date: "November 7, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/7.11.2026.JPG?Expires=1771176615&Signature=RbP--GlVvw5aB9GlJmfhMbiqt0rYp15PUoP16y4voJ06PY0ammUHHpBjj7J-1BjFt8CrZFdbKMug42gT1k~3gKJlPXNNnKjna3lcfeKuf8QrLv20pw4p1t1usvO8D5UOQBfHzdXDJr-AM2NwOSEAcnIbbBnBF9Xzp13dvnuWRB3jDqFwNPjchsLcHxAsF7vji~PFf8BBOxZtsfJv872hYefDa4c8rAoVFNy8T1sQ4U9-wpvduvFiIsh1upQGL25ukMB45qEsOgWdjxAwUt-lm5TqQHuHat79we~VuuId-HJk3YQMwgdnwJJgAZIdZbbN04TV~KAHrEXJVHYVI4xs2g__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/7.11.2026.JPG?Expires=1771176615&Signature=RbP--GlVvw5aB9GlJmfhMbiqt0rYp15PUoP16y4voJ06PY0ammUHHpBjj7J-1BjFt8CrZFdbKMug42gT1k~3gKJlPXNNnKjna3lcfeKuf8QrLv20pw4p1t1usvO8D5UOQBfHzdXDJr-AM2NwOSEAcnIbbBnBF9Xzp13dvnuWRB3jDqFwNPjchsLcHxAsF7vji~PFf8BBOxZtsfJv872hYefDa4c8rAoVFNy8T1sQ4U9-wpvduvFiIsh1upQGL25ukMB45qEsOgWdjxAwUt-lm5TqQHuHat79we~VuuId-HJk3YQMwgdnwJJgAZIdZbbN04TV~KAHrEXJVHYVI4xs2g__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e11",
        title: "Black & White Party",
        date: "November 21, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/21.11.2026.JPEG?Expires=1771176615&Signature=sjzDVrQ5RYcAKYjrWcvA51~v3TIYEnbWSFTeALd6lwGununObq7O4G3hvgPTPTl~--JBHBLO0GbjgAgi01m6BOQ20bGkbXtB7Ow3CV8DHCTbyV~v2Xk1pG17gk8PgwSEaI7Vq-blOYOPyMVozIClFfnXHhoNZI2WOGklFT8YlNDaiNos2vqDNw9E9ImLhFkry4-ML-3K-fqu42gdpOHykoryWBry6ahB~DXUEbV-qPXZH8Qmb9j1ZYmwBX4SO7BbyNzOdN3V0psC80DyuT7mMyZVKQxj~tULpzRFr8zuMbM3kdQL7EFS9fJSnjCjTdbYjyMHM2p9aJuKXgZ15PFcgA__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/21.11.2026.JPEG?Expires=1771176615&Signature=sjzDVrQ5RYcAKYjrWcvA51~v3TIYEnbWSFTeALd6lwGununObq7O4G3hvgPTPTl~--JBHBLO0GbjgAgi01m6BOQ20bGkbXtB7Ow3CV8DHCTbyV~v2Xk1pG17gk8PgwSEaI7Vq-blOYOPyMVozIClFfnXHhoNZI2WOGklFT8YlNDaiNos2vqDNw9E9ImLhFkry4-ML-3K-fqu42gdpOHykoryWBry6ahB~DXUEbV-qPXZH8Qmb9j1ZYmwBX4SO7BbyNzOdN3V0psC80DyuT7mMyZVKQxj~tULpzRFr8zuMbM3kdQL7EFS9fJSnjCjTdbYjyMHM2p9aJuKXgZ15PFcgA__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e12",
        title: "Winter Christmas Wonderland",
        date: "December 5, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/05.12.2026.JPG?Expires=1771176615&Signature=FCE0twH1yalxy0oa5g9RQMMISkidbdFc90dztdPFEiUpM-lZev0b6LCjmuNJiuZPbs0jeLrDQbBLOu0oF39SdfHUNcY8Y1bdNhwLUL4t5momMs-rA9kRDTAtcPonmaB5KLkdZxlvEVDdD~pgWjsfZXKt0av~m3zL2xM1Jw7tcnkaQGkjinC7Fm6YO830Oa5T~JCXwObFgSMREgAd-t2jh2K5rswneMK1LGn0ENNTr9Dcv~OcJsg-JGGC9T0v-DfelWajdYK8OJfHlQvgz4iicR23OCQPQnyt~JO12Hayse~DNP-ve7v~dcxHSNP5fulF692QMbeK0IAT5Yy328fZtQ__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/05.12.2026.JPG?Expires=1771176615&Signature=FCE0twH1yalxy0oa5g9RQMMISkidbdFc90dztdPFEiUpM-lZev0b6LCjmuNJiuZPbs0jeLrDQbBLOu0oF39SdfHUNcY8Y1bdNhwLUL4t5momMs-rA9kRDTAtcPonmaB5KLkdZxlvEVDdD~pgWjsfZXKt0av~m3zL2xM1Jw7tcnkaQGkjinC7Fm6YO830Oa5T~JCXwObFgSMREgAd-t2jh2K5rswneMK1LGn0ENNTr9Dcv~OcJsg-JGGC9T0v-DfelWajdYK8OJfHlQvgz4iicR23OCQPQnyt~JO12Hayse~DNP-ve7v~dcxHSNP5fulF692QMbeK0IAT5Yy328fZtQ__&Key-Pair-Id=K2NXBXLF010TJW"
    },
    {
        id: "e13",
        title: "Golden Gala",
        date: "December 31, 2026",
        image: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/31.12.2026.JPG?Expires=1771176615&Signature=HvgAQ8fDvmLEAKZ2LHBeOfKlkNcROolmT-mwvCGa0aNtAxtUkqDfVE9ZZ-PmhMp4SfnK86wX0NObBLSKI-r6HfuqqVCJKtgH-r~P30ZoJrwV2UDFo0RcQ65cz7ArAIoL0FvU8bWAC259dQlhgOT3eurtW88G-dmUuw0Btp5CW3DF30O-LPErd1O2Q2LFUQwVOMohTbSxEBDzTGdw03vZmuHvcslspaeZYod~-rD22A-DIIJIhrJatXBLKA8nLCB0FbDGl41UZoLqURTRq430RGz9AHUB67sr0mq2yHqoFLaU5sfhKMNtBLx5a5-dafZaLTCXAv20rrDk9kZtigmA7Q__&Key-Pair-Id=K2NXBXLF010TJW",
        ticketLink: "https://cdn.website-editor.net/s/8a21e840c8814d5ba0a3cdc88728e121/files/uploaded/31.12.2026.JPG?Expires=1771176615&Signature=HvgAQ8fDvmLEAKZ2LHBeOfKlkNcROolmT-mwvCGa0aNtAxtUkqDfVE9ZZ-PmhMp4SfnK86wX0NObBLSKI-r6HfuqqVCJKtgH-r~P30ZoJrwV2UDFo0RcQ65cz7ArAIoL0FvU8bWAC259dQlhgOT3eurtW88G-dmUuw0Btp5CW3DF30O-LPErd1O2Q2LFUQwVOMohTbSxEBDzTGdw03vZmuHvcslspaeZYod~-rD22A-DIIJIhrJatXBLKA8nLCB0FbDGl41UZoLqURTRq430RGz9AHUB67sr0mq2yHqoFLaU5sfhKMNtBLx5a5-dafZaLTCXAv20rrDk9kZtigmA7Q__&Key-Pair-Id=K2NXBXLF010TJW"
    }
];
